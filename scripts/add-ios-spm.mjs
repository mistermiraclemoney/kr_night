import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { loadConfig } = require("../node_modules/@capacitor/cli/dist/config.js");
const { addCommand } = require("../node_modules/@capacitor/cli/dist/tasks/add.js");

const config = await loadConfig();
const configWritable = config;

configWritable.ios.packageManager = Promise.resolve("SPM");
configWritable.cli.assets.ios.platformTemplateArchive = "ios-spm-template.tar.gz";
configWritable.cli.assets.ios.platformTemplateArchiveAbs = path.resolve(
  configWritable.cli.assetsDirAbs,
  configWritable.cli.assets.ios.platformTemplateArchive
);

await addCommand(configWritable, "ios");
