import { type Registry } from "shadcn/registry";

export const ui: Registry["items"] = [
  {
    name: "swipe-row",
    type: "registry:ui",
    title: "Swipe Row",
    description: "A swipe row for providing actions of swipe of left and right",
    dependencies: [],
    registryDependencies: ["utils"],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/molecule-ui/swipe-row.tsx",
        type: "registry:ui",
        target: "components/molecule-ui/swipe-row.tsx",
      },
    ],
  },
];
