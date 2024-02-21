# InformationMerge

一个集成了点击复制功能的展示组件 <br/>

import {VInformationMerge} from "information-merge";

示例:

    const data = [
       {
         value: "广州海珠区国际轻纺城首层F 1062-1063",
         label: "供应商地址",
       },
    ];
    return   <VInformationMerge
          data={data}
          aftercopy={(bol: boolean) => {
            if (bol) {
              ElMessage.success("复制成功");
            } else {
              ElMessage.error("复制失败")
            }
          }} // bol会传出复制成功或是失败
          clampOptions={{ clamp: 2, collapseNode: "折叠", expandNode: "查看全部" }}
        />;;

![image-20211014192959856](https://raw.githubusercontent.com/Alan1034/PicturesServer/main/PicGo_imgs/202110141930077.png)


clampOptions:{
clamp: 2,
collapseNode: "折叠",
expandNode: "展开"
}


import { copyToClipboard } from "information-merge";
const res=await copyToClipboard(`someString`)

安装：npm i information-merge<br/>
install: npm i information-merge
