/*
 * @Author: 陈德立*******419287484@qq.com
 * @Date: 2021-10-12 17:54:01
 * @LastEditTime: 2021-11-18 10:56:43
 * @LastEditors: 陈德立*******419287484@qq.com
 * @Github: https://github.com/Alan1034
 * @Description: InformationMerge index
 * @FilePath: \InformationMerge\src\index.js
 * 
 */
import * as Vue from "vue";

import InformationMergeVue3 from './InformationMergeVue3.vue';
import InformationMergeVue2 from './InformationMergeVue2.vue';

const version = Vue.default
  ? Number(Vue.default.version.split(".")[0])
  : Number(Vue.version.split(".")[0]);

let InformationMerge = null

if (`${version}` === "3") {
  InformationMerge = InformationMergeVue3
} else if (`${version}` === "2") {
  InformationMerge = InformationMergeVue2
}

export default InformationMerge