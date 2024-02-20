/** @format */

import { copyOrderNo, style } from "./components/copy";

const InformationMerge = {
  functional: true,
  props: {
    data: {
      default: [],
      type: Array,
    },
    aftercopy: {
      default: () => {},
      type: Function,
    },
  },
  render(createElement, context) {
    const { data, aftercopy } = context.props;
    const file = (
      <div>
        {data.map((item, index) => {
          const { value = "", label = "" } = item;
          const key = `${value}_${label}_${index}`;
          const int = (
            <span
              style={style}
              id={key}
              onClick={() => copyOrderNo(key, aftercopy)}
              // data-clipboard-text={value}
            >
              {value || "无"}
            </span>
          );
          return value ? (
            <div key={key}>
              <span>{label}：</span>
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
            </div>
          ) : (
            []
          );
        })}
      </div>
    );

    return file;
  },
};

export default InformationMerge;
