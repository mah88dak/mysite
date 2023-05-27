// show & hide shadow box for header when scroll down or up
// show & hide go up btn when scroll down or up
let headerEl = document.querySelector("header");
onscroll = _ => {
  if (scrollY > 100) {
    headerEl.classList.add("shadow-sm");
    document.querySelector(".go-up").classList.remove("d-none")
  } else {
    headerEl.classList.remove("shadow-sm")
    document.querySelector(".go-up").classList.add("d-none")
  }

}
//  go up page when click btn goUp
document.querySelector(".go-up").onclick = _ => scrollTo(0, 0)



// add add bounce animation when hover social-links   
document.querySelectorAll(".social-links a i").forEach(element => {
  element.onmouseenter = _ => {
    element.parentNode.classList.add("fa-bounce")
  }
  element.onmouseout = _ => {
    element.parentNode.classList.remove("fa-bounce")
  }
});


// number print by duration time when load
let i = 0
document.querySelectorAll(".numbers h3").forEach(item => {
  let num = +item.innerText
  let x = setInterval(() => {
    item.innerText = i
    i++;
    if (i > num) {
      clearInterval(x);
    }
  }, 20);
})

//********************    hide menu right click    ***************************************** */
// hide menu list when right click mouse and show warring alert when click right click mouse 
let alertAllowEl = document.querySelector("#alertAllow")
addEventListener("contextmenu" , event  =>{
  // event.preventDefault();
  alertAllowEl.classList.remove("d-none");
  setTimeout( _=>{
    alertAllowEl.classList.add("d-none");
  }, 10000)
})  
// close warring alert
document.querySelector("#alertAllow button").onclick = _=> {
  alertAllowEl.classList.add("d-none");
}




// change level skills for attributes data-level

document.querySelectorAll(".skills [data-level]").forEach(item => {

  setTimeout( _=>{
    item.style.width = item.getAttribute("data-level")+"%"
  }, 500)
  
  
});



// hide loading sec 
onload = _=>{
  document.querySelector(".loading").style.display = "none"
}