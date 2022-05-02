document.getElementById('cancel').addEventListener("click", () => {
    document.getElementById('contact-page').style.cssText = "top: -100vh; transition: 1s;"
})

document.getElementById('contact-btn').addEventListener("click", () => {
    document.getElementById('contact-page').style.cssText = "top: 0; transition: 1s;"
})

// javascript for avtivities full image
var allActivities = document.getElementsByClassName('activity');
for (var i = 0; i < allActivities.length; i++) {
    var activity = allActivities[i];
    activity.addEventListener("click", fullScreen);
}

function fullScreen(event) {
    var btn = event.target;
    var heading = btn.parentElement.children[1].innerText;
    var para = btn.parentElement.children[2].innerText;
    var image = btn.parentElement.children[3].src;
    displayFullSize(heading, para, image)
}

function displayFullSize(heading, para, image) {
    var displayContainer = document.createElement('div');
    displayContainer.classList.add('full-size')
    var keep=document.getElementsByClassName('keep')[0];
    var newDisplayContainer = `
                <img src="${image}" alt="">
                <div class="gradient">
                    <div class="activity-content">
                        <h2>${heading}</h2>
                        <p>${para}</p>
                    </div>
                </div>`
    displayContainer.innerHTML = newDisplayContainer;
    keep.append(displayContainer);
    keep.style.cssText="display: block;"
    document.querySelector('.cancel').style.display="block"
}

document.querySelector('.cancel').addEventListener("click", ()=>{
    document.getElementsByClassName('keep')[0].style.display="none"
})