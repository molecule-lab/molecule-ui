import { type Registry } from "shadcn/registry"

export const examples: Registry["items"] = [
  {
    name: "swipe-row-demo",
    type: "registry:example",
    title: "Swipe row demo",
    description: "A preview component for swipe row",
    dependencies: ["lucide-react"],
    registryDependencies: ["https://moleculeui.design/r/swipe-row", "avatar"],
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
    registryDependencies: ["https://moleculeui.design/r/swipe-row", "avatar"],
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
    registryDependencies: ["https://moleculeui.design/r/swipe-row", "avatar"],
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
    registryDependencies: ["https://moleculeui.design/r/swipe-row", "avatar"],
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
    title: "Discussion demo",
    description: "Preview component for discussion demo",
    dependencies: [],
    registryDependencies: [
      "avatar",
      "scroll-area",
      "https://moleculeui.design/r/discussion",
    ],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/example/discussion-demo.tsx",
        type: "registry:ui",
        target: "components/molecule-ui/example/discussion-demo.tsx",
      },
    ],
  },
  {
    name: "spinning-circle-demo",
    type: "registry:example",
    title: "Spinning circle demo",
    description:
      "A demo component showcasing a spinning circle loading indicator",
    dependencies: [],
    registryDependencies: ["https://moleculeui.design/r/spinning-circle"],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/example/spinning-circle-demo.tsx",
        type: "registry:ui",
        target: "components/molecule-ui/example/spinning-circle-demo.tsx",
      },
    ],
  },
  {
    name: "spinning-circle-with-message-demo",
    type: "registry:example",
    title: "Spinning circle with message demo",
    description:
      "A demo component showcasing a spinning circle loading indicator with message",
    dependencies: [],
    registryDependencies: ["https://moleculeui.design/r/spinning-circle"],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/example/spinning-circle-with-message-demo.tsx",
        type: "registry:ui",
        target:
          "components/molecule-ui/example/spinning-circle-with-message-demo.tsx",
      },
    ],
  },
  {
    name: "morphing-square-demo",
    type: "registry:example",
    title: "Morphing square demo",
    description:
      "A demo component showcasing a morphing square loading indicator",
    dependencies: [],
    registryDependencies: ["https://moleculeui.design/r/morphing-square"],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/example/morphing-square-demo.tsx",
        type: "registry:ui",
        target: "components/molecule-ui/example/morphing-square-demo.tsx",
      },
    ],
  },
  {
    name: "morphing-square-with-message-demo",
    type: "registry:example",
    title: "Morphing square with message demo",
    description:
      "A demo component showcasing a morphing square loading indicator with message",
    dependencies: [],
    registryDependencies: ["https://moleculeui.design/r/morphing-square"],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/example/morphing-square-with-message-demo.tsx",
        type: "registry:ui",
        target:
          "components/molecule-ui/example/morphing-square-with-message-demo.tsx",
      },
    ],
  },
  {
    name: "orbital-loader-demo",
    type: "registry:example",
    title: "Orbital loader demo",
    description: "A demo component showcasing a orbital loading indicator",
    dependencies: [],
    registryDependencies: ["https://moleculeui.design/r/orbital-loader"],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/example/orbital-loader-demo.tsx",
        type: "registry:ui",
        target: "components/molecule-ui/example/orbital-loader-demo.tsx",
      },
    ],
  },
  {
    name: "orbital-loader-with-message-demo",
    type: "registry:example",
    title: "Orbital loader with message demo",
    description:
      "A demo component showcasing a orbital loading indicator with message",
    dependencies: [],
    registryDependencies: ["https://moleculeui.design/r/orbital-loader"],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/example/orbital-loader-with-message-demo.tsx",
        type: "registry:ui",
        target:
          "components/molecule-ui/example/orbital-loader-with-message-demo.tsx",
      },
    ],
  },
  {
    name: "typewriter-loader-demo",
    type: "registry:example",
    title: "Typewriter loader demo",
    description:
      "A demo component showcasing a typewriter loading indicator demo",
    dependencies: [],
    registryDependencies: ["https://moleculeui.design/r/typewriter-loader"],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/example/typewriter-loader-demo.tsx",
        type: "registry:ui",
        target: "components/molecule-ui/example/typewriter-loader-demo.tsx",
      },
    ],
  },
  {
    name: "typewriter-loader-with-custom-text-demo",
    type: "registry:example",
    title: "Typewriter loader with custom text demo",
    description:
      "A demo component showcasing a typewriter loading indicator with custom text demo",
    dependencies: [],
    registryDependencies: ["https://moleculeui.design/r/typewriter-loader"],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/example/typewriter-loader-with-custom-text-demo.tsx",
        type: "registry:ui",
        target:
          "components/molecule-ui/example/typewriter-loader-with-custom-text-demo.tsx",
      },
    ],
  },
  {
    name: "profile-menu-demo",
    type: "registry:example",
    title: "Profile Menu Demo",
    description: "Demo for the animated profile menu",
    dependencies: [],
    registryDependencies: [
      "separator",
      "avatar",
      "https://moleculeui.design/r/profile-menu",
    ],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/example/profile-menu-demo.tsx",
        type: "registry:ui",
        target: "components/molecule-ui/example/profile-menu-demo.tsx",
      },
    ],
  },
  {
    name: "checkbox-demo",
    type: "registry:example",
    title: "Animated Checkbox Demo",
    description: "A demo component showcasing the animated checkbox",
    dependencies: [],
    registryDependencies: ["https://moleculeui.design/r/checkbox"],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/example/checkbox-demo.tsx",
        type: "registry:ui",
        target: "components/molecule-ui/example/checkbox-demo.tsx",
      },
    ],
  },
  {
    name: "bouncing-dots-demo",
    type: "registry:example",
    title: "Bouncing dots demo",
    description:
      "A demo component showcasing the bouncing dots loader component",
    dependencies: [],
    registryDependencies: ["https://moleculeui.design/r/bouncing-dots"],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/example/bouncing-dots-demo.tsx",
        type: "registry:ui",
        target: "components/molecule-ui/example/bouncing-dots-demo.tsx",
      },
    ],
  },
  {
    name: "bouncing-dots-with-message-demo",
    type: "registry:example",
    title: "Bouncing dots with message demo",
    description:
      "A demo component showcasing the bouncing dots loader component with message",
    dependencies: [],
    registryDependencies: ["https://moleculeui.design/r/bouncing-dots"],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/example/bouncing-dots-with-message-demo.tsx",
        type: "registry:ui",
        target:
          "components/molecule-ui/example/bouncing-dots-with-message-demo.tsx",
      },
    ],
  },
  {
    name: "wave-loader-demo",
    type: "registry:example",
    title: "Wave loader demo",
    description: "A demo component showcasing the wave loader component",
    dependencies: [],
    registryDependencies: ["https://moleculeui.design/r/wave-loader"],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/example/wave-loader-demo.tsx",
        type: "registry:ui",
        target: "components/molecule-ui/example/wave-loader-demo.tsx",
      },
    ],
  },
  {
    name: "wave-loader-with-message-demo",
    type: "registry:example",
    title: "Wave loader with message demo",
    description:
      "A demo component showcasing the wave loader component with message",
    dependencies: [],
    registryDependencies: ["https://moleculeui.design/r/wave-loader"],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/example/wave-loader-with-message-demo.tsx",
        type: "registry:ui",
        target:
          "components/molecule-ui/example/wave-loader-with-message-demo.tsx",
      },
    ],
  },
  {
    name: "voice-input-demo",
    type: "registry:example",
    title: "Voice input demo",
    description: "A demo of the animated voice input component",
    registryDependencies: ["https://moleculeui.design/r/voice-input"],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/example/voice-input-demo.tsx",
        type: "registry:ui",
        target: "components/molecule-ui/example/voice-input-demo.tsx",
      },
    ],
  },
  {
    name: "liquid-glass-button-demo",
    type: "registry:example",
    title: "Liquid glass button demo",
    description: "demo",
    registryDependencies: ["https://moleculeui.design/r/liquid-glass-button"],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/example/liquid-glass-button-demo.tsx",
        type: "registry:ui",
        target: "components/molecule-ui/example/liquid-glass-button-demo.tsx",
      },
    ],
  },
  {
    name: "expandable-button-demo",
    type: "registry:example",
    title: "Expandable Button Demo",
    description: "Todo",
    registryDependencies: ["https://moleculeui.design/r/expandable-button"],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/example/expandable-button-demo.tsx",
        type: "registry:ui",
        target: "components/molecule-ui/example/expandable-button-demo.tsx",
      },
    ],
  },
  {
    name: "expandable-button-group-demo",
    type: "registry:example",
    title: "Expandable Button Group Demo",
    description: "Todo",
    registryDependencies: ["https://moleculeui.design/r/expandable-button"],
    author: "Rushil Dhinoja",
    files: [
      {
        path: "registry/example/expandable-button-group-demo.tsx",
        type: "registry:ui",
        target:
          "components/molecule-ui/example/expandable-button-group-demo.tsx",
      },
    ],
  },
]
