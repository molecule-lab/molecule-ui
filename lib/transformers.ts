import type { ShikiTransformer } from "shiki";

export const transformers = [
  {
    code(node) {
      if (node.tagName === "code") {
        const raw = this.source;
        node.properties["__raw__"] = raw;

        if (raw.startsWith("npm install")) {
          node.properties["__npm__"] = raw;
          node.properties["__yarn__"] = raw.replaceAll(
            "npm install",
            "yarn add",
          );
          node.properties["__pnpm__"] = raw.replaceAll(
            "npm install",
            "pnpm add",
          );
          node.properties["__bun__"] = raw.replaceAll("npm install", "bun add");
        }

        if (raw.startsWith("npx create-")) {
          node.properties["__npm__"] = raw;
          node.properties["__yarn__"] = raw.replaceAll(
            "npx create-",
            "yarn create ",
          );
          node.properties["__pnpm__"] = raw.replaceAll(
            "npx create-",
            "pnpm create ",
          );
          node.properties["__bun__"] = raw.replaceAll("npx", "bunx --bun");
        }

        // npm create.
        if (raw.startsWith("npm create")) {
          node.properties["__npm__"] = raw;
          node.properties["__yarn__"] = raw.replaceAll(
            "npm create",
            "yarn create",
          );
          node.properties["__pnpm__"] = raw.replaceAll(
            "npm create",
            "pnpm create",
          );
          node.properties["__bun__"] = raw.replaceAll(
            "npm create",
            "bun create",
          );
        }

        // npx.
        if (raw.startsWith("npx")) {
          node.properties["__npm__"] = raw;
          node.properties["__yarn__"] = raw.replaceAll("npx", "yarn");
          node.properties["__pnpm__"] = raw.replaceAll("npx", "pnpm dlx");
          node.properties["__bun__"] = raw.replaceAll("npx", "bunx --bun");
        }

        // npm run.
        if (raw.startsWith("npm run")) {
          node.properties["__npm__"] = raw;
          node.properties["__yarn__"] = raw.replaceAll("npm run", "yarn");
          node.properties["__pnpm__"] = raw.replaceAll("npm run", "pnpm");
          node.properties["__bun__"] = raw.replaceAll("npm run", "bun");
        }
      }
    },
  },
] as ShikiTransformer[];
