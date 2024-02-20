"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: 陈德立*******419287484@qq.com
 * @Date: 2021-10-12 17:54:01
 * @LastEditTime: 2024-02-20 17:37:13
 * @LastEditors: 陈德立*******419287484@qq.com
 * @Github: https://github.com/Alan1034
 * @Description: InformationMerge index
 * @FilePath: \InformationMerge\src\index.ts
 *
 */
var Vue = require("vue");
var InformationMergeVue3_1 = require("./InformationMergeVue3");
var InformationMergeVue2_1 = require("./InformationMergeVue2");
// @ts-ignore
var version = Vue.default ? Number(Vue.default.version.split(".")[0]) : Number(Vue.version.split(".")[0]);
var InformationMerge = null;
if ("".concat(version) === "3") {
    InformationMerge = InformationMergeVue3_1.default;
}
else if ("".concat(version) === "2") {
    InformationMerge = InformationMergeVue2_1.default;
}
exports.default = InformationMerge;
