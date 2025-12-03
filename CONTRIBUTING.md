# Contributing to Molecule UI

Thank you for your interest in contributing to Molecule UI! We appreciate your support and look forward to your contributions. This document provides guidelines and information for contributors.

Please take a moment to review this document before submitting your first pull request. We also strongly recommend that you check for open issues and pull requests to see if someone else is working on something similar.

**You only need to run `pnpm generate:component` to add a new component or block** and it takes less than a minute.

Once done, open a pull request from your forked repo to the main repo [Molecule-UI](https://github.com/molecule-lab/molecule-ui)

If you need any help, feel free to reach out to [@rushil](https://x.com/rushildhinoja17).

## Getting Started

### Fork and Clone the Repository

1. **Fork this repository**  
   Click [here](https://github.com/molecule-lab/molecule-ui) to fork the repository.

2. **Clone your forked repository to your local machine**

   ```bash
   git clone https://github.com/<YOUR_USERNAME>/molecule-ui.git
   ```

3. **Navigate to the project directory**

   ```bash
   cd molecule-ui
   ```

4. **Create a new branch for your changes**

   ```bash
   git checkout -b my-new-branch
   ```

5. **Install dependencies**

   ```bash
   pnpm i
   ```

6. **Run the project**
   ```bash
   pnpm dev
   ```

## Adding a new Component

To add a new component to MoleculeUI you just need to run `pnpm generate:component`. This will create a boilerplate setup for a new component

1. Generate Component

   ```
   npm generate:component
   ```

   This will created the following files

   ```
   registry
   ├── molecule-ui
   │   └── example-component.tsx
   ├── example
   │   └── example-component-demo.tsx
   content
   └── docs
       └── components
           └── example-component.mdx
   public
   └── r
       ├── example-component.json
       └── example-component-demo.json
   ```

2. Edit Component

   Edit the main component in `registry/molecule-ui/example-component.tsx`

3. Edit Component Demo

   Provide a basic example to showcase your component in `registry/example/example-component-demo.tsx`

4. Edit Docs

   Edit MDX file for documenting your component in `content/docs/components/example-component.mdx`

   ````md
   ---
   title: Accordion
   description: A collapsible content component with smooth animations, built on Radix UI primitives and enhanced with Framer Motion for fluid transitions.
   links:
   doc: https://www.radix-ui.com/primitives/docs/components/accordion
   api: https://www.radix-ui.com/docs/primitives/components/accordion#api-reference
   ---

   <ComponentPreview name="example-component-demo" />

   ## Installation

   <Tabs defaultValue='cli'>

   <TabsList>
   <TabsTrigger value="cli">CLI</TabsTrigger>
   <TabsTrigger value="manual">Manual</TabsTrigger>
   </TabsList>

   <TabsContent value='cli'>

   ```bash
   npx shadcn@latest add @moleculeui/accordion
   ```

   </TabsContent>

   <TabsContent value='manual'>

   <Steps>

   <Step>Install the following dependencies:</Step>

   ```bash
   npm install @radix-ui/react-accordion motion
   ```

   <Step>Copy and paste the following code into your project.</Step>

   <ComponentSource
   title="components/molecule-ui/accordion.tsx"
   name="accordion"
   />

   <Step>Update the import paths to match your project setup.</Step>

   </Steps>

   </TabsContent>

   </Tabs>

   <div>

   ## Usage

   ```tsx
   import {
     Accordion,
     AccordionContent,
     AccordionItem,
     AccordionTrigger,
   } from "@/components/molecule-ui/accordion"
   ```

   ```tsx
   <Accordion className="w-full" type="multiple">
     <AccordionItem value="item-1">
       <AccordionTrigger>It is animated ?</AccordionTrigger>
       <AccordionContent>Yes, it is animated using motion</AccordionContent>
     </AccordionItem>
   </Accordion>
   ```

    </div>
   ````

5. Update Registry

   Export your component and example in the registry files:

   In `registry/registry-ui.ts`:

   **The Component will already there in registry-ui.ts you just need to edit is as per your components requirements**

   In `registry/registry-example.ts`

   **The Demo Component will already there in registry-example.ts you just need to edit is as per your components requirements**

   Make sure to add any necessary dependencies, tailwind configurations, or other properties as needed for your specific component.

6. Build registry

   ```bash
   pnpm build:registry
   ```

7. Format and fix linting before committing

   ```bash
   pnpm format:fix
   ```

   ```bash
   pnpm lint:fix
   ```

   Make sure to run these two commands before committing your changes.

## Ask for Help

For any help or questions, please open a new GitHub issue.
