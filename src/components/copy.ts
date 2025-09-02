/**
 * @format
 * @description: 复制函数
 * @param {string} textToCopy
 * @return {*}
 */

export const requestPermission = async () => {
  let permission = false;
  try {
    // 尝试读取剪贴板来触发权限请求
    await navigator.clipboard.readText();
    permission = true;
  } catch (error) {
    if (error.name === "NotAllowedError") {
      console.log("用户拒绝了剪贴板权限");
    }
  }
  return permission;
};

export const copyToClipboard = async (textToCopy: string) => {
  const permission = await requestPermission();
  // navigator clipboard 需要https等安全上下文
  if (navigator.clipboard && window.isSecureContext && permission) {
    // navigator clipboard 向剪贴板写文本
    navigator.clipboard.writeText(textToCopy);
    return;
  } else {
    // 创建text area
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    // 使text area不在viewport，同时设置不可见
    textArea.style.position = "absolute";
    textArea.style.opacity = "0";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    await new Promise<void>((res, rej) => {
      // 执行复制命令并移除文本框
      document.execCommand("copy") ? res() : rej();
      textArea.remove();
    });
    return;
  }
};

export const copyOrderNo = (id, aftercopy) => {
  const range = document.createRange();
  range.selectNode(document.getElementById(`${id}`));
  const selection = window.getSelection();
  if (selection.rangeCount > 0) selection.removeAllRanges();
  selection.addRange(range);
  const flag = document.execCommand("copy");
  if (aftercopy) {
    aftercopy(flag);
  }
};

export const style = { cursor: "pointer" };
