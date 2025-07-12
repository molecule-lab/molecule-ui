import { type Registry } from "shadcn/registry";

export const examples: Registry["items"] = [
  {
    name: "swipe-row-demo",
    type: "registry:example",
    title: "Swipe row demo",
    description: "A preview component for swipe row",
    dependencies: ["lucide-react"],
    registryDependencies: ["http://localhost:3000/r/swipe-row", "avatar"],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/example/swipe-row-demo.tsx",
        type: "registry:ui",
        target: "components/molecule-ui/example/swipe-row-demo.tsx",
      },
    ],
  },
  {
    name: "swipe-row-left-demo",
    type: "registry:example",
    title: "Swipe row left demo",
    description:
      "A demo component for adding actions only to left swipe in swipe row",
    dependencies: ["lucide-react"],
    registryDependencies: ["http://localhost:3000/r/swipe-row", "avatar"],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/example/swipe-row-left-demo.tsx",
        type: "registry:ui",
        target: "components/molecule-ui/example/swipe-row-left-demo.tsx",
      },
    ],
  },
  {
    name: "swipe-row-right-demo",
    type: "registry:example",
    title: "Swipe row right demo",
    description:
      "A demo component for adding actions only to right swipe in swipe row",
    dependencies: ["lucide-react"],
    registryDependencies: ["http://localhost:3000/r/swipe-row", "avatar"],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/example/swipe-row-right-demo.tsx",
        type: "registry:ui",
        target: "components/molecule-ui/example/swipe-row-right-demo.tsx",
      },
    ],
  },
  {
    name: "swipe-row-list-demo",
    type: "registry:example",
    title: "Swipe row list demo",
    description: "A group of Swipe Row representing a list view",
    dependencies: ["lucide-react"],
    registryDependencies: ["http://localhost:3000/r/swipe-row", "avatar"],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/example/swipe-row-list-demo.tsx",
        type: "registry:ui",
        target: "components/molecule-ui/example/swipe-row-list-demo.tsx",
      },
    ],
  },
  {
    name: "discussion-demo",
    type: "registry:example",
    title: "Discussion Demo",
    description: "Preview component for discussion demo",
    dependencies: [],
    registryDependencies: [],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/example/discussion-demo.tsx",
        type: "registry:ui",
        target: "components/molecule-ui/example/discussion-demo.tsx",
      },
    ],
  },
];
