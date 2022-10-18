import { log } from "./utilities";
import get from "lodash.get";
import { UserConfig } from "next-i18next";

log();
const add = (a: number, b: number): number => a + b;

console.log(get({ a: { b: { c: "abc" } } }, "a.b.c"));

export type I18n = UserConfig["i18n"];

export default add;
