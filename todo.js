let elForm = document.querySelector(".form");
let elForm2 = document.querySelector(".form-2");
let elInput = document.querySelector(".input");
let elContainer = document.querySelector(".container");
let newList = document.createElement("ul");
let elbtn = document.querySelector(".button");
let pi = document.querySelector(".pi");
let todoArray = [];
let tasks = [];

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    let elInputValue = elInput.value.trim();
    
    let obj = {
        id: todoArray.length+1,
        name: elInputValue,
    }
    
    if(obj.name !="" ) {
        todoArray.push(obj);
    }
    
    createTodo(todoArray);
    
    // localStorage.user = obj;
    // localStorage.user = JSON.stringify(obj);
    
    // // sometime later
    // let user = JSON.parse( localStorage.user );
    // // alert( user.name ); // John
    // pi.textContent(user.name); // John
    
    
});


function createTodo(arr){
    newList.innerHTML = "";
    arr.forEach(i => {
        let newItem = document.createElement("li");
        let newCheckbox = document.createElement("input");
        let newP = document.createElement("p");
        let newBtn = document.createElement("button");
        newBtn.textContent = "Delete";
        newBtn.classList.add("btn", "btn-danger", "position-absolute", "delete-button");
        newBtn.style.right = "0";
        newBtn.setAttribute("onclick", "btnclick();");
        newP.classList.add("ms-2","mb-0");
        newCheckbox.type = "checkbox";
        newCheckbox.name = "user_todo";
        
        // console.log(todoArray.length);
        // if (typeof(Storage) !== "undefined") {
        //     if (localStorage.clickcount) {
        //       localStorage.clickcount = Number(localStorage.clickcount)+1;
        //     } else {
        //       localStorage.clickcount = 1;
        //     }
        //     newP.textContent = localStorage.clickcount;
        //   } else {
        //     newP.textContent = "Sorry, there";
        //   }
        
        
        // let restored = localStorage.setItem('array', JSON.stringify(todoArray.length))
        
        
        // let restoredArray = (localStorage.getItem('array'));
        // restoredArray = JSON.stringify(restoredArray);
        
        // newP.innerHTML = restoredArray;
        
        // localStorage.setItem("ourarraykey",JSON.stringify(todoArray));
        
        // // let storedArray = localStorage.getItem("ourarraykey");
        // // todoArray = JSON.parse(storedArray);
        // let b = localStorage.getItem(localStorage.key(todoArray));
        // b = JSON.parse(b);
        // newP.textContent = b;
        
        // function createItem() {
        //     localStorage.setItem('nameOfItem',JSON.stringify( todoArray.length)); 
        // } 
        // createItem() // Creates a item named 'nameOfItem' and stores a value of 'value'
        
        
        //     let get =  localStorage.getItem('nameOfItem');  
        //  // Gets the value of 'nameOfItem' and returns it
        // // console.log(getValue()); //'value';
        // newP.textContent = get;
        
        
        
        newCheckbox.setAttribute("aria-label", "This is a new checkbox");
        
        newItem.appendChild(newCheckbox);
        
        newP.textContent = i.name;
        newItem.appendChild(newP);
        newItem.appendChild(newBtn);
        newItem.classList.add("bg-light","px-3","py-2", "rounded", "mt-2", "mb-2", "d-flex", "align-items-center", "position-relative", "todo-item");
        newList.appendChild(newItem);
        newList.classList.add("list-unstyled");
        newList.style.marginTop = "55px";
        newList.style.paddingLeft = "236px";
        newList.style.paddingRight = "234px";
        elContainer.appendChild(newList);
        
        
    })
    
}


// function myFunction() {

// restoredArray = JSON.stringify(restoredArray);
localStorage.setItem('array', JSON.stringify(todoArray));


let restoredArray = localStorage.getItem('array');
// restoredArray = (restoredArray);

restoredArray = JSON.parse(JSON.stringify(todoArray));


for (const data of restoredArray) {
    pi.textContent = data.name;
    console.log("yes", restoredArray);
}
console.log("And");
// 

// pi.textContent = JSON.parse(restoredArray);
// console.log(restoredArray);




