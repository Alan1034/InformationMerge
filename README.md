# InformationMerge

一个集成了点击复制功能的展示组件 <br/>

import InformationMerge from "information-merge";

示例:

    const data = [
       {
         value: "广州海珠区国际轻纺城首层F 1062-1063",
         label: "广州海珠区国际轻纺城首层",
       },
    ];
    return  <InformationMerge
                data={data}
                aftercopy={(bol) => {
                  if (bol) {
                    this.msgSuccess("复制成功。。");
                  } else {
                    this.msgError("复制失败！！");
                  }
                }} // bol会传出复制成功或是失败
              />;

![image-20211014192959856](https://raw.githubusercontent.com/Alan1034/PicturesServer/main/PicGo_imgs/202110141930077.png)

安装：npm i information-merge<br/>
install: npm i information-merge
