#!/usr/bin/env tsx
/**
 * Molecule UI Component Generator
 *
 * This script automates the creation of new UI components for the Molecule UI library.
 * It generates component files, example files, documentation, and updates the registry
 * to include the new component.
 */
import { exec } from "child_process"
import { promises as fs } from "fs"
import path from "path"
import prompts from "prompts"
import slugify from "slugify"

/* eslint-disable no-relative-import-paths/no-relative-import-paths */
import { examples } from "../registry/registry-example"
import { ui } from "../registry/registry-ui"

// Color codes for console output
const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
}

// Helper function to create colored console methods
const createColoredLog = (color: string) => (message: string) => {
  console.log(`${color}${message}${colors.reset}`)
}

// Template strings for generating different types of files
const registryTemplate = ({
  constName,
  updatedArray,
}) => `import {type Registry} from "shadcn/registry"

export const ${constName}: Registry["items"] = ${updatedArray}
`

const componentTemplate = ({ componentName }) => `
export function ${componentName.replace(" ", "")}() {
  return <div>${componentName}</div>
}
`
const exampleTemplate = ({ componentName }) => `
export function ${componentName.replace(" ", "")}Demo() {
  return <div>${componentName}Demo</div>
}
`
const mdxTemplate = ({ componentName, description }) => `---
title: ${componentName}
description: "${description}"
---

<ComponentPreview name="${slugify(componentName, { lower: true })}" />

`

/**
 * Step 1: Create registry objects for the new component and its demo
 * This prepares the metadata that will be added to the registry
 */
async function createObjects({ componentName, type, description, author }) {
  const name = slugify(componentName, { lower: true })

  const uiObject = {
    name,
    type,
    title: componentName,
    description,
    dependencies: [],
    registryDependencies: [],
    author,
    files: [
      {
        path: `registry/molecule-ui/${name}.tsx`,
        type,
        target: `components/molecule-ui/${name}.tsx`,
      },
    ],
  }
  const exampleObject = {
    name: `${name}-demo`,
    type: "registry:example",
    title: `${componentName} Demo`,
    description: "",
    dependencies: [],
    registryDependencies: [],
    author,
    files: [
      {
        path: `registry/example/${name}-demo.tsx`,
        type,
        target: `components/molecule-ui/example/${name}-demo.tsx`,
      },
    ],
  }

  const updatedUiRegistry = [...ui, uiObject]
  const updatedExampleRegistry = [...examples, exampleObject]

  return { updatedUiRegistry, updatedExampleRegistry }
}

/**
 * Step 2: Generate the actual files
 * Creates component files, example files, and documentation in their respective directories
 */
async function createFiles({ componentName, componentType, description }) {
  const baseFileName = slugify(componentName, { lower: true })

  const sanitizedComponentName =
    componentName.charAt(0).toUpperCase() + componentName.slice(1)

  const componentPath = path.join(
    process.cwd(),
    `registry/molecule-ui/${baseFileName}.tsx`,
  )
  const examplePath = path.join(
    process.cwd(),
    `registry/example/${baseFileName}-demo.tsx`,
  )
  const docPath = path.join(
    process.cwd(),
    `content/docs/${componentType}/${baseFileName}.mdx`,
  )

  await fs.writeFile(
    componentPath,
    componentTemplate({ componentName: sanitizedComponentName }),
  )

  await fs.writeFile(
    examplePath,
    exampleTemplate({ componentName: sanitizedComponentName }),
  )

  await fs.writeFile(
    docPath,
    mdxTemplate({ componentName: sanitizedComponentName, description }),
  )

  return { componentPath, examplePath, docPath }
}

/**
 * Step 3: Update registry files
 * Modifies the registry files to include the new component and demo
 */
async function updateRegistryFile({
  updatedUiRegistry,
  updatedExampleRegistry,
}) {
  const uiRegistryPath = path.join(process.cwd(), "registry/registry-ui.ts")
  const examplesRegistryPath = path.join(
    process.cwd(),
    "registry/registry-example.ts",
  )

  await fs.writeFile(
    uiRegistryPath,
    registryTemplate({
      constName: "ui",
      updatedArray: JSON.stringify(updatedUiRegistry, null, 2),
    }).toString(),
    "utf-8",
  )

  await fs.writeFile(
    examplesRegistryPath,
    registryTemplate({
      constName: "examples",
      updatedArray: JSON.stringify(updatedExampleRegistry, null, 2),
    }).toString(),
    "utf-8",
  )

  return { uiRegistryPath, examplesRegistryPath }
}

/**
 * Step 4: Clean up and finalize
 * Runs code formatting and rebuilds the registry to ensure everything is properly integrated
 */
async function cleanUpScripts() {
  createColoredLog(colors.blue)("🎨 Formatting files...")

  await new Promise((resolve, reject) => {
    const process = exec(`pnpm format:fix`)

    process.on("exit", (code) => {
      if (code === 0) {
        resolve(undefined)
      } else {
        reject(new Error(`Process exited with code ${code}`))
      }
    })
  })

  createColoredLog(colors.blue)("🔨 Building registry...")

  await new Promise((resolve, reject) => {
    const process = exec(`pnpm build:registry`)

    process.on("exit", (code) => {
      if (code === 0) {
        resolve(undefined)
      } else {
        reject(new Error(`Process exited with code ${code}`))
      }
    })
  })
}

/**
 * Main workflow: Orchestrates the entire component generation process
 *
 * The process follows these steps:
 * 1. Collect user input (component name, description, author, category)
 * 2. Determine component type and location
 * 3. Generate all necessary files
 * 4. Update the registry
 * 5. Clean up and finalize
 */
async function main() {
  try {
    createColoredLog(colors.cyan)(
      "🚀 Welcome to Molecule UI Component Generator!",
    )
    createColoredLog(colors.dim)(
      "This tool will help you create new UI components with all necessary files and registry updates.\n",
    )

    // Ask user for the initial input
    const { componentName, description, author, category } = await prompts([
      {
        type: "text",
        name: "componentName",
        message: "What is your component name?",
        validate: (value) => (!value ? "Component name is required!" : true),
      },
      {
        type: "text",
        name: "description",
        message: "Write a description about your component?",
        validate: (value) =>
          !value ? "Component description is required!" : true,
      },
      {
        type: "text",
        name: "author",
        message: "Author?",
        initial: "Rushil Dhinoja",
      },
      {
        type: "select",
        name: "category",
        message: "Select a category:",
        choices: [
          {
            title: "Component",
            value: "component",
            description: "React component with TypeScript",
          },
          {
            title: "Block",
            value: "block",
            description: "Content block or utility",
          },
        ],
      },
    ])

    // Block flow
    if (category === "block") {
      createColoredLog(colors.yellow)(
        "⚠️  Blocks are coming soon! For now, please select 'Component' to create UI components.",
      )
      return
    }

    // Component flow
    if (category === "component") {
      // Get choices for the type of component based on existing directory
      const options = await fs.readdir(path.join(process.cwd(), "content/docs"))

      // Build choices object for user input
      const choices = options
        .filter((dir) => !dir.startsWith("("))
        .map((dir) => ({
          title: dir.charAt(0).toUpperCase() + dir.slice(1),
          value: dir.toLowerCase(),
        }))

      // Ask user to select component type
      const { componentType } = await prompts([
        {
          type: "select",
          name: "componentType",
          message: "Please select component type",
          choices,
          hint: "If a type is not mentioned here please create a new directory inside content/docs",
        },
      ])

      // Create a aggregated data object for passing it down to other functions
      const data = {
        componentName,
        description,
        author,
        type: "registry:ui",
      }
      const registry = await createObjects(data)

      const componentFiles = await createFiles({
        componentName,
        componentType,
        description,
      })

      const registryFiles = await updateRegistryFile({
        updatedUiRegistry: registry.updatedUiRegistry,
        updatedExampleRegistry: registry.updatedExampleRegistry,
      })

      await cleanUpScripts()

      createColoredLog(colors.green)("✨ Cleanup completed successfully!")
      createColoredLog(colors.green)(
        "\n✅ Component boilerplate generated successfully!",
      )
      createColoredLog(colors.cyan)(
        `📝 Component file: ${componentFiles.componentPath}`,
      )
      createColoredLog(colors.cyan)(
        `🎯 Example file: ${componentFiles.examplePath}`,
      )
      createColoredLog(colors.cyan)(
        `📚 Documentation: ${componentFiles.docPath}`,
      )

      createColoredLog(colors.magenta)("\n🔄 Registry updated successfully!")
      createColoredLog(colors.yellow)(
        `⚙️  To configure component dependencies and other fields: ${registryFiles.uiRegistryPath}`,
      )
      createColoredLog(colors.yellow)(
        `⚙️  To configure example dependencies and other fields: ${registryFiles.examplesRegistryPath}`,
      )

      createColoredLog(colors.green)(
        "\n🎉 Your component is ready! Next steps:",
      )
      createColoredLog(colors.white)(
        "1. Customize the component logic in the component file",
      )
      createColoredLog(colors.white)(
        "2. Create an engaging demo in the example file",
      )
      createColoredLog(colors.white)("3. Write comprehensive documentation")
      createColoredLog(colors.white)(
        "4. Run 'pnpm dev' to see your component in action!",
      )
    }
  } catch (error) {
    createColoredLog(colors.red)(
      "❌ An error occurred while generating the component:",
    )
    createColoredLog(colors.red)(error)
    createColoredLog(colors.yellow)(
      "\n💡 Please check your inputs and try again. If the problem persists, check the file paths and permissions.",
    )
  }
}

// Handle process termination
process.on("SIGINT", () => {
  createColoredLog(colors.cyan)("\n\n👋 Goodbye!")
  process.exit(0)
})

main().catch(console.error)
