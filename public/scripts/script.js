let openButton = document.getElementById("open");
let sectionToappear = document.getElementById("section"); 
let closeButton = document.getElementById("close");


openButton.addEventListener("click" , openNav );
function openNav(){
    sectionToappear.style.right = 0;    
    if (screen.width <= 400){
        sectionToappear.style.left = 0;
    }
}

closeButton.addEventListener("click" , () => {
    sectionToappear.style.right = '-400px';
    if (screen.width <= 400){
        sectionToappear.style.left = '-400px'
    }
})