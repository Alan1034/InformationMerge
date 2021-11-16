<!--
 * @Author: 陈德立*******419287484@qq.com
 * @Date: 2021-10-12 17:54:01
 * @LastEditTime: 2021-11-16 17:13:05
 * @LastEditors: 陈德立*******419287484@qq.com
 * @Github: https://github.com/Alan1034
 * @Description: 
 * @FilePath: \InformationMerge\src\InformationMerge.vue
 * 
-->
<script>
import Clipboard from "clipboard";

const copyOrderNo = (id) => {
  // 此处需要传入一个id
  let clipboard = new Clipboard(`#${id}`);
  clipboard.on("success", (e) => {
     this.$message({
      message: "复制成功",
      type: "success",
    });
    clipboard.destroy();
  });
};

const InformationMerge = (props, context) => {
  const { data } = props;
  const style = "cursor:pointer";
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
        return (
          <div>
            <div>{label}：</div>
            <el-tooltip placement="top" v-slots={slots}>
              <div
                style={style}
                id={key}
                onClick={() => copyOrderNo(key)}
                data-clipboard-text={value}
              >
                {value || "无"}
              </div>
            </el-tooltip>
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
