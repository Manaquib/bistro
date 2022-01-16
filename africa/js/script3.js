document.getElementsByClassName('more-blog')[0].addEventListener("click", ()=>{
    document.getElementsByClassName('full-blog')[0].style.display="block"
})

document.getElementsByClassName('back-to-blog')[0].addEventListener("click", ()=>{
    document.getElementsByClassName('full-blog')[0].style.display="none"
})

document.getElementById('cancel').addEventListener("click", () => {
    document.getElementById('contact-page').style.cssText = "top: -100vh; transition: 1s;"
})

document.getElementById('contact-btn').addEventListener("click", () => {
    document.getElementById('contact-page').style.cssText = "top: 0; transition: 1s;"
})