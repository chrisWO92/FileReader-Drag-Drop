export {dragOverHandler, projectDropHandler,removeDragData, changeColor};



//Prevent default behavior (Prevent file from being opened)

function dragOverHandler (event) {
    event.preventDefault();
}



//Typically, an application may want to perform some cleanup by deleting the file drag data. A drop event is passed along from drop handler to removeDragData function. If the broswer supports the DataTransferItemList interface, the list's clear() method is used to delete the dile drag data; otherwise the DataTransfer() object's clearData() method is used to delete the data.

function removeDragData (event) {

    if (event.dataTransfer.items){
        event.dataTransfer.items.clear();
    }else{
        event.dataTransfer.clearData();
    }

}

//Función que maneja el evento "drop", ó arrastrar un archivo 

function projectDropHandler(event, droppingZone) {
    event.preventDefault();
    var text;
    var url;
    if (event.dataTransfer.items) {
        for (var item of event.dataTransfer.items){
            if (item.kind === 'file'){
                if (item.type === 'text/plain'){
                    file = item.getAsFile();
                    const reader = new FileReader();
                    reader.readAsText(file);
                    reader.addEventListener("load",(event)=>{
                        text = event.currentTarget.result;
                        droppingZone.textContent += text;
                    });
                    //array.push([item.type, text]);
                }
                else if (item.type === 'image/png'){
                    file = item.getAsFile();
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.addEventListener("load",(event)=>{
                        url = event.currentTarget.result;
                        var img = document.createElement("IMG");
                        img.setAttribute('src', url);
                        droppingZone.appendChild(img);
                    });
                }
            }
        }
    } else {
        for (var file of event.dataTransfer.files) {
            if (file.type === 'text/plain'){
                const reader = new FileReader();
                reader.readAsText(file);
                reader.addEventListener("load",(event)=>{
                    text = event.currentTarget.result;
                    droppingZone.textContent += text;
                });
            }
            else if (file.type === 'image/png'){
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.addEventListener("load",(event)=>{
                    url = event.currentTarget.result;
                    var img = document.createElement("IMG");
                    img.setAttribute('src', url);
                    droppingZone.appendChild(img);
                });
            }
        }
    }
}


// Función que cambia el color de un objeto junto con su borde, usando una transición

function changeColor(obj, color) {
    obj.style.color = color;
    obj.style.borderColor = color;
    obj.style.transition = 'all 0.3s linear 0s';
}



