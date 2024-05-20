import { mdListCert, useListCert } from "./MVCmodel"

function createItem(data){
    alert(`running post api for DSKhenThuong table of mysql \ntitle: ${data.name}\nlink: ${data.url}`)
};
export {createItem}

function updateField(e,data,setData){
    data[e.target.id] = e.target.value
    setData(data)
}
export {updateField}

function checkURL(data:mdListCert,setData){
    if (!data.url.includes('.jpg')){
        alert('must add image .jpg')
        data.url = ''
        setData(data)
    }
}
export {checkURL}