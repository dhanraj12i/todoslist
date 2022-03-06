
add = document.getElementById("add");
add.addEventListener("click", getAndUpdate);
let resetform  = document.getElementById("form-text").reset();
function getAndUpdate() {
    console.log("updating list ..");

    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;

    if (localStorage.getItem('itemsJSON') == null) {
        itemsJSONArr = [];
        itemsJSONArr.push([tit, desc]);
        localStorage.setItem('itemsJSON', JSON.stringify(itemsJSONArr))

    } else {
        itemsJSONArrStr = localStorage.getItem('itemsJSON')
        itemsJSONArr = JSON.parse(itemsJSONArrStr);
        itemsJSONArr.push([tit, desc]);
        localStorage.setItem('itemsJSON', JSON.stringify(itemsJSONArr))

    }

    update();
    // reset();
    
}

// function reset(){

//     document.getElementById("form-text").reset();
// }
// populate the table
function update() {

    if (localStorage.getItem('itemsJSON') == null) {
        itemsJSONArr = [];
        localStorage.setItem('itemsJSON', JSON.stringify(itemsJSONArr))
    }
    tablebody = document.getElementById("tablebody")

    let str = "";

    itemsJSONArr.forEach((element, index) => {
        str += `
        <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        
        </tr>
        `
    });
    // <td><button class="btn btn-sm btn-primary" onclick = "deleted(${index})">Delete</button></td> 43 Line

    tablebody.innerHTML = str;
}


// update();
function deleted(itemIndex) {
    console.log("Delete", itemIndex + 1);
    itemsJSONArrStr = localStorage.getItem('itemsJSON')
    itemsJSONArr = JSON.parse(itemsJSONArrStr);

    // delete
    itemsJSONArr.splice(itemIndex, 1);
    localStorage.setItem('itemsJSON', JSON.stringify(itemsJSONArr));
    update();
}


function clearList() {

    console.log("clearing the storage");
    localStorage.clear();
    update();
}

function confirmclearList() {

    let clearLisst = confirm('please, confirm for clearing content of list!! ');
    if (clearLisst) {
        clearList();
   
    }
}