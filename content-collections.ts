import {
  defineCollection,
  defineConfig,
  object,
} from "@content-collections/core";
import { remarkInstall } from "fumadocs-docgen";
import {
  createMetaSchema,
  createDocSchema,
  transformMDX,
} from "@fumadocs/content-collections/configuration";
import rehypePrettyCode from "rehype-pretty-code";
import type { ShikiTransformer } from "shiki";

export const transformers = [
  {
    code(node) {
      if (node.tagName === "code") {
        const raw = this.source;
        node.properties["__raw__"] = raw;

        if (raw.startsWith("npm install")) {
          node.properties["__npm__"] = raw;
          node.properties["__yarn__"] = raw.replace("npm install", "yarn add");
          node.properties["__pnpm__"] = raw.replace("npm install", "pnpm add");
          node.properties["__bun__"] = raw.replace("npm install", "bun add");
        }

        if (raw.startsWith("npx create-")) {
          node.properties["__npm__"] = raw;
          node.properties["__yarn__"] = raw.replace(
            "npx create-",
            "yarn create "
          );
          node.properties["__pnpm__"] = raw.replace(
            "npx create-",
            "pnpm create "
          );
          node.properties["__bun__"] = raw.replace("npx", "bunx --bun");
        }

        // npm create.
        if (raw.startsWith("npm create")) {
          node.properties["__npm__"] = raw;
          node.properties["__yarn__"] = raw.replace(
            "npm create",
            "yarn create"
          );
          node.properties["__pnpm__"] = raw.replace(
            "npm create",
            "pnpm create"
          );
          node.properties["__bun__"] = raw.replace("npm create", "bun create");
        }

        // npx.
        if (raw.startsWith("npx")) {
          node.properties["__npm__"] = raw;
          node.properties["__yarn__"] = raw.replace("npx", "yarn");
          node.properties["__pnpm__"] = raw.replace("npx", "pnpm dlx");
          node.properties["__bun__"] = raw.replace("npx", "bunx --bun");
        }

        // npm run.
        if (raw.startsWith("npm run")) {
          node.properties["__npm__"] = raw;
          node.properties["__yarn__"] = raw.replace("npm run", "yarn");
          node.properties["__pnpm__"] = raw.replace("npm run", "pnpm");
          node.properties["__bun__"] = raw.replace("npm run", "bun");
        }
      }
    },
  },
] as ShikiTransformer[];
const docs = defineCollection({
  name: "docs",
  directory: "content/docs",
  include: "**/*.mdx",
  schema: createDocSchema,
  transform: (document, context) =>
    transformMDX(document, context, {
      rehypePlugins: (plugins) => {
        plugins.shift();
        plugins.push([
          rehypePrettyCode,
          {
            theme: {
              dark: "github-dark",
              light: "github-light-default",
            },
            transformers,
          },
        ]);
        return plugins;
      },
    }),
});

const metas = defineCollection({
  name: "meta",
  directory: "content/docs",
  include: "**/meta.json",
  parser: "json",
  schema: createMetaSchema,
});

export default defineConfig({
  collections: [docs, metas],
});
