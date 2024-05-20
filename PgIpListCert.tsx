import React, { act } from "react";

import Input from './element/clstdInput.tsx';
import FormTemplate from './element/clptnFillForm.tsx';

import { mdListCert, useListCert } from "./MVCmodel.tsx";
import { checkURL, createItem, updateField } from "./MVCcontroller.tsx";

/* const sampledata: mdListCert = {
    name: "Cuong",
    url: "https//localhost:3000"
} */

const page = () => {
//assign zustand state & MVCcontroller to the event listener     
    const data = useListCert().data
    const setData = useListCert().setData
    const actChange = (e) => {
        updateField(e,data,setData)}
    const actSave = () => {createItem(data)}
    const actTab = () => {checkURL(data,setData)}

    const defaultImg = "https://www.ashutoshengineers.com/wp-content/uploads/2023/10/Continuous-Casting-Machine.jpg"
    const imgSrc = data.url.includes("jpg")? data.url : defaultImg

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Input id = 'url' label = 'Paste the https link' value = {data.url} actChange={actChange} actTab={actTab}/>
            <Input id = 'name' label = 'write the title' value = {data.name} actChange={actChange}/>
            <img src={imgSrc}></img>
        </div>
    )
    return(
        <FormTemplate title='Create New Item' actionLabel='Create' body = {bodyContent} 
         actSave={actSave}
        />
    )
}

export default page