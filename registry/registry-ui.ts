import { type Registry } from "shadcn/registry";

export const ui: Registry["items"] = [
  {
    name: "button",
    type: "registry:ui",
    title: "Button",
    description: "Example",
    dependencies: [],
    registryDependencies: [],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/molecule-ui/button.tsx",
        type: "registry:ui",
        target: "components/molecule-ui/button.tsx",
      },
    ],
  },
];
