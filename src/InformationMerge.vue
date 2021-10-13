<script>
import Clipboard from "clipboard";
import { ElMessage } from "element-plus";

const copyOrderNo = (id) => {
  // 此处需要传入一个id
  let clipboard = new Clipboard(`#${id}`);
  clipboard.on("success", (e) => {
    ElMessage({
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
