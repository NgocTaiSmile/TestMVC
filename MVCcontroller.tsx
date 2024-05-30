import { mdListCert, useListCert } from "./MVCmodel"

async function createItem(data){
    alert(`running post api for DSKhenThuong table of mysql \ntitle: ${data.name}\nlink: ${data.url}`)
    const url = 'http://192.168.0.192:5000/add'
    var body = {"FullName":''}
    body.FullName=data.name
    const response = await fetch(url, {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    })
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