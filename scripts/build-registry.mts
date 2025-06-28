import { registryItemSchema, type Registry } from "shadcn/registry";
import { componentRegistry } from "../registry/index";
import { z } from "zod";
import path from "path";
import { rimraf } from "rimraf";
import { promises as fs } from "fs";
import { exec } from "child_process";

const registry = {
  name: "shadcn/ui",
  homepage: "https://ui.shadcn.com",
  items: z.array(registryItemSchema).parse([
    {
      name: "index",
      type: "registry:style",
      dependencies: [
        "tw-animate-css",
        "class-variance-authority",
        "lucide-react",
      ],
      registryDependencies: ["utils"],
      cssVars: {},
      files: [],
    },
    ...componentRegistry,
  ]),
} satisfies Registry;

async function buildRegistryJsonFile() {
  const fixedRegistry = {
    ...registry,
    items: registry.items.map((item) => {
      const files = item.files?.map((file) => {
        return { ...file, path: `${file.path}` };
      });

      return { ...item, files };
    }),
  };

  rimraf.sync(path.join(process.cwd(), `registry.json`));
  rimraf.sync(path.join(process.cwd(), `public/registry.json`));

  const registryJson = JSON.stringify(fixedRegistry, null, 2);

  await fs.writeFile(path.join(process.cwd(), `registry.json`), registryJson);
  await fs.writeFile(
    path.join(process.cwd(), `public/registry.json`),
    registryJson,
  );
}

async function buildRegistry() {
  return new Promise((resolve, reject) => {
    const process = exec(`pnpm shadcn:build`);

    process.on("exit", (code) => {
      if (code === 0) {
        resolve(undefined);
      } else {
        reject(new Error(`Process exited with code ${code}`));
      }
    });
  });
}

try {
  await buildRegistryJsonFile();

  await buildRegistry();
} catch (error) {
  if (error instanceof Error) {
    console.error("Error stack:", error.stack);
  }
  process.exit(1);
}
