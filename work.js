const clc = document.querySelector(".cancel");
const arr= document.querySelector(".arr-container");
const leftcontainer= document.querySelector(".left-container");

arr.addEventListener("click", () =>{
    arr.classList.add("active_arr");
    if(leftcontainer.classList.contains("off")) {
        leftcontainer.classList.remove("off");
        leftcontainer.classList.add("active");
    }

});

clc.addEventListener("click", ()=>{
    arr.classList.remove("active_arr");
    if(leftcontainer.classList.contains("active")){
        leftcontainer.classList.remove("active");
        leftcontainer.classList.add("off");
    }

    
});