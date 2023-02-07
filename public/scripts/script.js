let openButton = document.getElementById("open");
let sectionToappear = document.getElementById("section"); 
let closeButton = document.getElementById("close");


openButton.addEventListener("click" , openNav );
function openNav(){
    sectionToappear.style.right = 0;    
}

closeButton.addEventListener("click" , () => {
    sectionToappear.style.right = '-400px';
})