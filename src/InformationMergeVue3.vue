<!--
 * @Author: 陈德立*******419287484@qq.com
 * @Date: 2021-10-12 17:54:01
 * @LastEditTime: 2021-11-18 16:49:22
 * @LastEditors: 陈德立*******419287484@qq.com
 * @Github: https://github.com/Alan1034
 * @Description: 
 * @FilePath: \InformationMerge\src\InformationMergeVue3.vue
 * 
-->
<script>
import { copyOrderNo, style } from "./components/copy";

const InformationMerge = (props, context) => {
  const { data, aftercopy } = props;
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
          <span
            style={style}
            id={key}
            onClick={() => copyOrderNo(key, aftercopy)}
          >
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
  aftercopy: {
    default: () => {},
    type: Function,
  },
};

export default InformationMerge;
</script>
