import React from "react";
import { useState, useEffect } from "react";

import { IconArrowCollapse,IconImageSearch } from "./element/IconIcon";

interface Props {
    maiHan: string;
    lop1?: string;
    _1?: number;
    xuatSac?: string;
    content: string;
}

const Component1: React.FC<Props> = (props) => {

    const [ShowLocal, ToggleLocal] = useState(false)

    const sampleItem = {title: 'Mạng dữ liệu đang chờ tải xuống', grade: '', note:[''],content:'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/371247798_816837566567791_1883408416639496517_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=HuWOowtD7NIAX_Wa2JV&_nc_ht=scontent.fsgn5-10.fna&oh=03_AdTJQ5xTA_F9F5-KFDXU-7hJoU3V3jo5JZrdf0coBEaKpg&oe=651A9252'}
    const sampleList = Array(10).fill(sampleItem)
    const [DataStore, GetData] = useState(sampleList)
    useEffect(() =>  {
          fetch("http://192.168.0.192:5000/")
          .then(response => response.json())
          .then((data) =>  {
            GetData(data)
            console.log(data)
          })
          .catch(error => {console.log('Rất tiếc, không tải được dữ liệu vào lúc này!')})
        },[]);

    return(
    <>
    {DataStore.map((item , index) => {
    return(
    <div className="root">
        <div className='_1'>{index+1}</div>
        <div className='maiHan'>{item.FullName}</div>
        <div onClick={() => {ToggleLocal(!ShowLocal)}}>
            {(!ShowLocal) && <IconImageSearch width={25} height = {25} />}
            {(ShowLocal) &&<IconArrowCollapse width={25} height = {25} />} 
        </div>
        <div className='line1'></div>  
    </div>
    )
    })}
    </>
    )        
};

export default Component1


