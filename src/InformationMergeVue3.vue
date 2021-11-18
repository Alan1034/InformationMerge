<!--
 * @Author: 陈德立*******419287484@qq.com
 * @Date: 2021-10-12 17:54:01
 * @LastEditTime: 2021-11-18 11:08:14
 * @LastEditors: 陈德立*******419287484@qq.com
 * @Github: https://github.com/Alan1034
 * @Description: 
 * @FilePath: \InformationMerge\src\InformationMergeVue3.vue
 * 
-->
<script>
import { copyOrderNo, style } from "./components/copy";

const InformationMerge = (props, context) => {
  const { data } = props;
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
          <span style={style} id={key} onClick={() => copyOrderNo(key)}>
            {value || "无"}
          </span>
        );
        return value ? (
          <div key={key}>
            <span>{label}：</span>
            <el-tooltip placement="top" v-slots={slots}>
              {int}
            </el-tooltip>
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
