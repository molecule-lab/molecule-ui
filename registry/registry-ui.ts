import { type Registry } from "shadcn/registry";

export const ui: Registry["items"] = [
  {
    name: "swipeable-item",
    type: "registry:ui",
    title: "Swipeable Item",
    description: "Swipeable List Item",
    dependencies: [],
    registryDependencies: ["utils"],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/molecule-ui/swipeable-item.tsx",
        type: "registry:ui",
        target: "components/molecule-ui/swipeable-item.tsx",
      },
    ],
  },
];
