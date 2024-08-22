const light =document.querySelector(".light");
const toggle =document.querySelector("#toggle");
const sunIcon =document.querySelector(".toggle .bxs-sun");
const moonIcon =document.querySelector(".toggle .bx-moon");

toggle.addEventListener("change",() =>{
    light.classList.toggle("dark");
    sunIcon.className =sunIcon.className =="fa-solid fa-sun"? "fa-solid fa-sun"  :"fa-solid fa-sun";
  moonIcon.className =moobIcon.className =="fa-solid fa-moon"? "fa-solid fa-moon"  :"fa-solid fa-moon";
});
var div =document.getElementById('main');
var display = 0; 
function hideShow()
{
    if (display == 1)
    {
        div.style.display = 'block';
        display = 0;
    }
    else{
        div.style.display = 'none'
        display = 1;
    }
}