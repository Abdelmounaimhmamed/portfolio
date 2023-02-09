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

// let text = document.getElementById("text");
// let data = "Let's Contact .";
// let i = 0;

// function writeData(){
//     if(i === data.length){
//         i = 0;
//         text.innerHTML = '';
//         setTimeout( writeData, 1000);
//         return ;
//     }
//     text.innerHTML += data[i];
//     i++;
//     setTimeout(writeData , 200);
// }
// writeData();



var i = 0;
var txt ="Let's contact ."; /* The text */
var speed = 40; /* The speed/duration of the effect in milliseconds */
let txt2 = "you are not driven by something bigger than you, you will not succeed. You need a reason to get up in the morning and do the hard thing, often without achieving the results you want. "



function typeWriter() {
    // if (i === txt2.length){
    //     i = 0;
    //     document.getElementById("demo").innerHTML = '';
    //     setTimeout(typeWriter, speed);
    //     return ;
    // }
  if (i < txt2.length) {
    document.getElementById("demo").innerHTML += txt2.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();


