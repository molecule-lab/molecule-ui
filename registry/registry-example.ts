import { type Registry } from "shadcn/registry";

export const examples: Registry["items"] = [
  {
    name: "swipe-preview-demo",
    type: "registry:example",
    title: "Swipeable Item Demo",
    description: "Swipeable Item Demo",
    dependencies: [],
    registryDependencies: ["http://localhost:3000/r/swipeable-item"],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/example/swipe-preview-demo.tsx",
        type: "registry:ui",
        target: "components/molecule-ui/swipe-preview-demo.tsx",
      },
    ],
  },
];
