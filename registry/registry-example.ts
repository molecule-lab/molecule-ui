import { type Registry } from "shadcn/registry";

export const examples: Registry["items"] = [
  {
    name: "button-demo",
    type: "registry:example",
    title: "Button Demo",
    description: "Example Demo",
    dependencies: [],
    registryDependencies: ["http://localhost:3000/r/button"],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/example/button-demo.tsx",
        type: "registry:ui",
        target: "components/molecule-ui/button-demo.tsx",
      },
    ],
  },
];
