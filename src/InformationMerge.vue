<!--
 * @Author: 陈德立*******419287484@qq.com
 * @Date: 2021-10-12 17:54:01
 * @LastEditTime: 2021-11-16 19:19:58
 * @LastEditors: 陈德立*******419287484@qq.com
 * @Github: https://github.com/Alan1034
 * @Description: 
 * @FilePath: \InformationMerge\src\InformationMerge.vue
 * 
-->
<script>
import Clipboard from "clipboard";
import * as Vue from "vue";

const version = Vue.default
  ? Number(Vue.default.version.split(".")[0])
  : Number(Vue.version.split(".")[0]);

const copyOrderNo = async (id) => {
  // 此处需要传入一个id
  let clipboard = new Clipboard(`#${id}`);
  if (`${version}` === 3) {
    const { ElMessage } = await import("element-plus");
    clipboard.on("success", (e) => {
      ElMessage({
        message: "复制成功",
        type: "success",
      });
      clipboard.destroy();
    });
  } else {
    const { Message } = await import("element-ui");
    clipboard.on("success", (e) => {
      Message({
        message: "复制成功",
        type: "success",
      });
      clipboard.destroy();
    });
  }
};

const InformationMerge = (props, context) => {
  let { data } = props;
  if (props.props.data) {
    data = props.props.data;
  }
  const style = { cursor: "pointer", padding: "0px 10px" };
  const i = (
    <div>
      {data.map((item, index) => {
        const { value = "", label = "" } = item;
        const key = `${value}_${label}_${index}`;
        const slots = {
          content: () => (
            <div>
              {value}
              <br />
              点击复制
            </div>
          ),
        };
        const int = (
          <div
            style={style}
            id={key}
            onClick={() => copyOrderNo(key)}
            data-clipboard-text={value}
          >
            {value || "无"}
          </div>
        );
        return (
          <div key={key}>
            <div>{label}：</div>
            {`${version}` === 3 ? (
              <el-tooltip placement="top" v-slots={slots}>
                {int}
              </el-tooltip>
            ) : (
              <el-tooltip placement="top">
                <div slot="content">
                  <div>
                    {value}
                    <br />
                    点击复制
                  </div>
                </div>
                {int}
              </el-tooltip>
            )}
          </div>
        );
      })}
    </div>
  );
  return i;
};
InformationMerge.props = {
  data: {
    default: [],
    type: Array,
  },
};

export default InformationMerge;
</script>
