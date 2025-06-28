import { examples } from "./registry-example";
import { lib } from "./registry-lib";
import { ui } from "./registry-ui";

export const componentRegistry = [...ui, ...examples, ...lib];
