/** @format */

import { copyOrderNo, style } from "./components/copy";
import "./components/clamp.js";
import { nextTick, forceUpdate } from "vue";
const InformationMerge = (props, context) => {
  const { data = [], aftercopy, clampOptions } = props;
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
        nextTick(() => {
          const node = document.getElementById(`${key}`);
          if (node) {
            // console.log(clampOptions);
            $clamp(node, { ...clampOptions });
          }
        });

        return value ? (
          <div key={key}>
            <span>
              {label}
              {label ? "：" : ""}
            </span>
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
  clampOptions: {
    // https://github.com/josephschmitt/Clamp.js
    default: {},
    type: Object,
  },
};

export default InformationMerge;
