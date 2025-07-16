import { examples } from "@/registry/registry-example";
import { lib } from "@/registry/registry-lib";
import { ui } from "@/registry/registry-ui";

export const componentRegistry = [...ui, ...examples, ...lib];
