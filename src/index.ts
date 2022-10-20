import { log } from "./utilities";
import get from "lodash.get";
import { UserConfig } from "next-i18next";
import { resolve } from "path";
import fs from "fs";

log();
const add = (a: number, b: number): number => a + b;

console.log(get({ a: { b: { c: "abc" } } }, "a.b.c"));

export type I18n = UserConfig["i18n"];

const config = require(resolve("ts-project-demo.config.js"));

fs.readdir(resolve("./"), (err, files) => {
  if (err) {
    throw err;
  }
  console.log(files);
});

export const logConfig = () => {
  console.log("ts-project-demo.config.js", config);
};

export default add;
