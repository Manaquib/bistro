document.getElementById('cancel').addEventListener("click", ()=>{
    document.getElementById('contact-page').style.cssText="top: -100vh; transition: 1s;"
})

document.getElementById('contact-btn').addEventListener("click", ()=>{
    document.getElementById('contact-page').style.cssText="top: 0; transition: 1s;"
})

document.querySelector('.past').addEventListener("click", ()=>{
    document.querySelector('#past').style.display="block"
    document.querySelector('#present').style.display="none"
    document.querySelector('#future').style.display="none"
})
document.querySelector('.present').addEventListener("click", ()=>{
    document.querySelector('#present').style.display="block"
    document.querySelector('#past').style.display="none"
    document.querySelector('#future').style.display="none"
})
document.querySelector('.future').addEventListener("click", ()=>{
    document.querySelector('#future').style.display="block"
    document.querySelector('#past').style.display="none"
    document.querySelector('#present').style.display="none"
})

document.querySelector('.breakfast').addEventListener("click", ()=>{
    document.querySelector('#breakfast').style.display="block"
    document.querySelector('#lunch').style.display="none"
    document.querySelector('#dinner').style.display="none"
})
document.querySelector('.lunch').addEventListener("click", ()=>{
    document.querySelector('#lunch').style.display="block"
    document.querySelector('#breakfast').style.display="none"
    document.querySelector('#dinner').style.display="none"
})
document.querySelector('.dinner').addEventListener("click", ()=>{
    document.querySelector('#dinner').style.display="block"
    document.querySelector('#lunch').style.display="none"
    document.querySelector('#breakfast').style.display="none"
})