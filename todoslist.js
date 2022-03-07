
add = document.getElementById("add");
add.addEventListener("click", getAndUpdate);
// let resetform  = document.getElementById("form-text").reset();

window.onload = function () {                                                  //On page load prebvious content will alos display in table format.

    itemsJSONArrStr = localStorage.getItem('itemsJSON')                   
    itemsJSONArr = JSON.parse(itemsJSONArrStr);
    localStorage.setItem('itemsJSON', JSON.stringify(itemsJSONArr))

    update();
    // tablebody = document.getElementById("tablebody")

    // let str = "";

    // itemsJSONArr.forEach((element, index) => {
    //     str += `
    //    <tr>
    //    <th scope="row">${index + 1}</th>   
    //    <td>${element[0]}</td>
    //    <td>${element[1]}</td>
    //    <td></td>
    //    </tr>
    //    `
    // });
    // // <td><button class="btn btn-sm btn-primary" onclick = "deleted(${index})">Delete</button></td> 43 Line

    // tablebody.innerHTML = str;
};
window.addEventListener("scroll",function(){
    let navbar = this.document.querySelector('nav');
    navbar.classList.toggle("sticky",window.scrollY > 0);
})

function getAndUpdate() {

    console.log("updating list ..");

    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;

    if (tit == "" || desc == "") {                                         // check text box empty or not and alert user

        alert("pl enter List details!!");

    } else {
        if (localStorage.getItem('itemsJSON') == null) {                        //if object not present on local storage then create array and load object 
            itemsJSONArr = [];
            itemsJSONArr.push([tit, desc]);
            localStorage.setItem('itemsJSON', JSON.stringify(itemsJSONArr))

        } else {
            itemsJSONArrStr = localStorage.getItem('itemsJSON')                    //object present then covert it into string and push array and load again.
            itemsJSONArr = JSON.parse(itemsJSONArrStr);
            itemsJSONArr.push([tit, desc]);
            localStorage.setItem('itemsJSON', JSON.stringify(itemsJSONArr))

        }
    }

    document.getElementById('title').value = "";                           //clearing textbox after add event             
    document.getElementById('description').value = "";                     //clearing textbox after add event

    update();
}


function update() {                                                        // populate the table
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
        <td></td>
        </tr>
        `
    });
    // <td><button class="btn btn-sm btn-primary" onclick = "deleted(${index})">Delete</button></td> 43 Line

    tablebody.innerHTML = str;
}

function deleted(itemIndex) {
    console.log("Deleted", itemIndex + 1);
    itemsJSONArrStr = localStorage.getItem('itemsJSON')
    itemsJSONArr = JSON.parse(itemsJSONArrStr);

    // delete
    itemsJSONArr.splice(itemIndex, 1);
    localStorage.setItem('itemsJSON', JSON.stringify(itemsJSONArr));
    update();
}


function clearList() {                                                  //clear list and local stored data

    console.log("clearing the storage");
    localStorage.clear();
    update();
}

function confirmclearList() {                                            // promted user for clear list action

    let clearLisst = confirm('please, confirm for clearing content of list!! ');
    if (clearLisst) {
        clearList();
    }
}