<!--
 * @Author: 陈德立*******419287484@qq.com
 * @Date: 2021-10-12 17:54:01
 * @LastEditTime: 2021-11-17 15:55:55
 * @LastEditors: 陈德立*******419287484@qq.com
 * @Github: https://github.com/Alan1034
 * @Description: 
 * @FilePath: \InformationMerge\src\InformationMerge.vue
 * 
-->
<script>
import * as Vue from "vue";

const version = Vue.default
  ? Number(Vue.default.version.split(".")[0])
  : Number(Vue.version.split(".")[0]);

const copyOrderNo = (id) => {
  const range = document.createRange();
  range.selectNode(document.getElementById(`${id}`));
  const selection = window.getSelection();
  if (selection.rangeCount > 0) selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand("copy");
  alert("复制成功......");
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
            // data-clipboard-text={value}
          >
            {value || "无"}
          </div>
        );
        return value ? (
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
        ) : (
          []
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
