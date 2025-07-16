import { type Registry } from "shadcn/registry"

export const ui: Registry["items"] = [
  {
    name: "swipe-row",
    type: "registry:ui",
    title: "Swipe Row",
    description: "A swipe row for providing actions of swipe of left and right",
    dependencies: ["motion"],
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
  {
    name: "discussion",
    type: "registry:ui",
    title: "Discussion",
    description:
      "A component for displaying nested discussions or comment threads.",
    dependencies: ["@radix-ui/react-accordion", "lucide-react"],
    registryDependencies: ["utils"],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/molecule-ui/discussion.tsx",
        type: "registry:ui",
        target: "components/molecule-ui/discussion.tsx",
      },
    ],
  },
  {
    name: "spinning-circle",
    type: "registry:ui",
    title: "Spinning Circle",
    description:
      "A customizable spinning circle loader component for indicating loading states in your application. Features smooth animations and optional loading messages.",
    dependencies: ["motion"],
    registryDependencies: ["utils"],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/molecule-ui/spinning-circle.tsx",
        type: "registry:ui",
        target: "components/molecule-ui/spinning-circle.tsx",
      },
    ],
  },
  {
    name: "morphing-square",
    type: "registry:ui",
    title: "Morphing Square",
    description:
      "A customizable morphing square loader component for indicating loading states in your application. Features smooth shape transitions and optional loading messages.",
    dependencies: ["motion"],
    registryDependencies: ["utils"],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/molecule-ui/morphing-square.tsx",
        type: "registry:ui",
        target: "components/molecule-ui/morphing-square.tsx",
      },
    ],
  },
  {
    name: "orbital-loader",
    type: "registry:ui",
    title: "Orbital Loader",
    description:
      "A customizable orbital loader component for indicating loading states in your application. Features smooth orbital animations and optional loading messages.",
    dependencies: ["motion"],
    registryDependencies: ["utils"],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/molecule-ui/orbital-loader.tsx",
        type: "registry:ui",
        target: "components/molecule-ui/orbital-loader.tsx",
      },
    ],
  },
  {
    name: "typewriter-loader",
    type: "registry:ui",
    title: "Typewriter Loader",
    description:
      "A customizable typewriter loader component for indicating loading states in your application. Features smooth typing animations and customizable text content.",
    dependencies: ["motion"],
    registryDependencies: ["utils"],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/molecule-ui/typewriter-loader.tsx",
        type: "registry:ui",
        target: "components/molecule-ui/typewriter-loader.tsx",
      },
    ],
  },
]
