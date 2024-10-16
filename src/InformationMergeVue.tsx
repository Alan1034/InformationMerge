/** @format */

import { copyOrderNo, style } from "./components/copy";
import "./components/clamp.js";
import { nextTick, ref } from "vue";
declare global {
  interface Window {
    $clamp: any,
  }
}
const InformationMerge = (props, context) => {
  const { data, aftercopy, clampOptions } = props;
  let show = ref(false);
  let maxLength = 0
  data.forEach(element => {
    const { value = "", label = "" } = element;
    maxLength += value.length
  });
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
        let thisNode = null;
        const int = (
          <span>
            <el-collapse-transition>
              <span v-show={!show.value}>
                <span
                  style={style}
                  id={key}
                  onClick={() => copyOrderNo(key, aftercopy)}
                  ref={(node) => {
                    thisNode = node;
                  }}
                >
                  {value || "无"}
                </span>
              </span>
            </el-collapse-transition>
          </span>
        );
        // console.log(thisNode)
        if (clampOptions) {
          nextTick(() => {
            if (thisNode) {
              window.$clamp(thisNode, { ...clampOptions });
            }
          });
        }
        return value ? (
          <div key={key}>
            <span>
              {label}
              {label ? "：" : ""}
            </span>
            <el-tooltip placement="top" v-slots={slots}>
              {int}
            </el-tooltip>
            <el-collapse-transition>
              <span v-show={show.value}>{value || "无"}</span>
            </el-collapse-transition>
          </div>
        ) : (
          []
        );
      })}
      {clampOptions
        && maxLength > (clampOptions?.clampLength || Infinity)
        && <el-button
          type="primary"
          link
          onClick={() => (show.value = !show.value)}
        >
          {show.value
            ? clampOptions?.collapseNode || "折叠"
            : clampOptions?.expandNode || "展开"}
        </el-button>}
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
    require: false,
    default: () => { },
    type: Function,
  },
  clampOptions: {
    // https://github.com/josephschmitt/Clamp.js
    require: false,
    type: Object,
  },
};

export default InformationMerge;

