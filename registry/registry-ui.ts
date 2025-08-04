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
    dependencies: ["motion", "class-variance-authority"],
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
    dependencies: ["motion", "class-variance-authority"],
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
    dependencies: ["motion", "class-variance-authority"],
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
  {
    name: "profile-menu",
    type: "registry:ui",
    title: "Profile Menu",
    description:
      "An animated collapsible profile menu component with smooth transitions and customizable content sections.",
    dependencies: ["motion"],
    registryDependencies: ["utils"],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/molecule-ui/profile-menu.tsx",
        type: "registry:ui",
        target: "components/molecule-ui/profile-menu.tsx",
      },
    ],
  },
  {
    name: "checkbox",
    type: "registry:ui",
    title: "Checkbox",
    description:
      "An animated checkbox component with smooth transitions and hover effects built on Radix UI primitives.",
    dependencies: ["@radix-ui/react-checkbox", "motion"],
    registryDependencies: ["utils"],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/molecule-ui/checkbox.tsx",
        type: "registry:ui",
        target: "components/molecule-ui/checkbox.tsx",
      },
    ],
  },
  {
    name: "bouncing-dots",
    type: "registry:ui",
    title: "Bouncing Dots",
    description:
      "An animated loading indicator featuring three bouncing dots with customizable colors and spacing.",
    dependencies: ["motion", "class-variance-authority"],
    registryDependencies: ["utils"],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/molecule-ui/bouncing-dots.tsx",
        type: "registry:ui",
        target: "components/molecule-ui/bouncing-dots.tsx",
      },
    ],
  },
  {
    name: "wave-loader",
    type: "registry:ui",
    title: "Wave Loader",
    description:
      "An animated loading indicator featuring vertical bars that scale up and down in a wave-like pattern to indicate loading states.",
    dependencies: ["motion", "class-variance-authority"],
    registryDependencies: ["utils"],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/molecule-ui/wave-loader.tsx",
        type: "registry:ui",
        target: "components/molecule-ui/wave-loader.tsx",
      },
    ],
  },
  {
    name: "voice-input",
    type: "registry:ui",
    title: "Voice Input",
    description:
      "An interactive voice recording interface with animated visual feedback, timer display, and customizable start/stop callbacks.",
    dependencies: ["motion", "lucide-react"],
    registryDependencies: ["utils"],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/molecule-ui/voice-input.tsx",
        type: "registry:ui",
        target: "components/molecule-ui/voice-input.tsx",
      },
    ],
  },
  {
    name: "expandable-button",
    type: "registry:ui",
    title: "Expandable Button",
    description:
      " A button that smoothly transitions between collapsed and expanded states using spring animations. Shows only an icon when collapsed and reveals text alongside the icon when expanded, perfect for responsive layouts and space-saving interfaces.",
    dependencies: ["motion"],
    registryDependencies: ["utils"],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/molecule-ui/expandable-button.tsx",
        type: "registry:ui",
        target: "components/molecule-ui/expandable-button.tsx",
      },
    ],
  },
  {
    name: "liquid-glass-button",
    type: "registry:ui",
    title: "Liquid Glass Button",
    description:
      "A glassmorphic button component with backdrop blur effects and liquid-like visual styling for modern interfaces.",
    dependencies: ["@radix-ui/react-slot", "class-variance-authority"],
    registryDependencies: ["utils"],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/molecule-ui/liquid-glass-button.tsx",
        type: "registry:ui",
        target: "components/molecule-ui/liquid-glass-button.tsx",
      },
    ],
  },
  {
    name: "warp-dialog",
    type: "registry:ui",
    title: "Warp Dialog",
    description:
      "A visually striking dialog component with 3D warp animations and smooth transitions. Features perspective transformations, animated backgrounds, and spring-based motion effects for an immersive user experience.",
    dependencies: ["motion", "@radix-ui/react-slot"],
    registryDependencies: ["utils"],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/molecule-ui/warp-dialog.tsx",
        type: "registry:ui",
        target: "components/molecule-ui/warp-dialog.tsx",
      },
    ],
  },
  {
    name: "word-rotate",
    type: "registry:ui",
    title: "Word Rotate",
    description:
      "A text animation component that smoothly rotates through an array of words with customizable duration and motion effects.",
    dependencies: ["motion"],
    registryDependencies: ["utils"],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/molecule-ui/word-rotate.tsx",
        type: "registry:ui",
        target: "components/molecule-ui/word-rotate.tsx",
      },
    ],
  },
]
