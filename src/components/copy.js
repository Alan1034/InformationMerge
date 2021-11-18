/*
 * @Author: 陈德立*******419287484@qq.com
 * @Date: 2021-10-12 17:54:01
 * @LastEditTime: 2021-11-18 11:26:10
 * @LastEditors: 陈德立*******419287484@qq.com
 * @Github: https://github.com/Alan1034
 * @Description: 
 * @FilePath: \InformationMerge\src\components\copy.js
 * 
 */

export const copyOrderNo = (id) => {
  const range = document.createRange();
  range.selectNode(document.getElementById(`${id}`));
  const selection = window.getSelection();
  if (selection.rangeCount > 0) selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand("copy");
  alert("复制成功......");
};

export const style = { cursor: "pointer", padding: "0px 5px" };