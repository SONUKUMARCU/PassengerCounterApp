// document.getElementById("count-el").innerText = 5;

let count = 0;
function myFunction(){
    document.getElementById("count-el").innerText = ++count;
}


// newFunction();
function newFunction(){
    console.log(5);
}

let saveEl = document.getElementById ("save-el");
function savebtn(){
    let save_count = count + " - ";
    saveEl.textContent += save_count;
    document.getElementById("count-el").innerText = 0;
    count = 0;
}
