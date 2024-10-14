# InformationMerge

一个集成了点击复制功能的展示组件，vue2请使用@1版本，Vue3请使用@2版本 <br/>

import {VInformationMerge} from "information-merge";

示例:

    const data = [
       {
         value: "广州海珠区国际轻纺城首层F 1062-1063",
         label: "供应商地址",
       },
    ];
    return <VInformationMerge
          data={data}
          aftercopy={(bol: boolean) => {
            if (bol) {
              ElMessage.success("复制成功");
            } else {
              ElMessage.error("复制失败")
            }
          }} // 
          clampOptions={{ clamp: 2, collapseNode: "折叠", expandNode: "查看全部" }}
        />;;

![image-20211014192959856](https://raw.githubusercontent.com/Alan1034/PicturesServer/main/PicGo_imgs/202110141930077.png)

![image-20240221162025794](https://raw.githubusercontent.com/Alan1034/PicturesServer/main/PicGo_imgs/202402211620881.png)

| 参数         | 格式/示例                                            | 必传 | 内容说明                                                     |
| ------------ | :--------------------------------------------------- | ---- | ------------------------------------------------------------ |
| data         | [{value:String,label?:String}]                       | 是   | label可以不传，value传入VNode时无法正确计算宽度 ×，请传入String                                                |
| aftercopy    | (bol)=>{bol: boolean}                                | 否   | bol会传出复制成功或是失败                                    |
| clampOptions | {clamp: 2,clampLength: 28,collapseNode?: "折叠",expandNode?: "展开"} | 否   | clamp:详见https://github.com/josephschmitt/Clamp.js的clamp √参数，目前不支持useNativeClamp × ；clampLength:字符串的超出折叠长度，用于计算展开折叠按钮是否展示，不传入clampLength则不展示；collapseNode和expandNode为按钮文案； |

将字符串复制到剪贴板

import { copyToClipboard } from "information-merge";

```
const res=await copyToClipboard(`someString`)
```

安装：npm i information-merge<br/>
install: npm i information-merge
