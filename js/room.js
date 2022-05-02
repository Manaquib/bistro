document.getElementById('cancel').addEventListener("click", () => {
    document.getElementById('contact-page').style.cssText = "top: -100vh; transition: 1s;"
})

document.getElementById('contact-btn').addEventListener("click", () => {
    document.getElementById('contact-page').style.cssText = "top: 0; transition: 1s;"
})

// javascript for individual rooms
var indiRooms = document.getElementsByClassName('indi-room');
for (var i = 0; i < indiRooms.length; i++) {
    var indiRoom = indiRooms[i];
    indiRoom.addEventListener("click", storeRoom);
}

function storeRoom(event) {
    var btn = event.target;
    var roomType = btn.parentElement.children[0].innerText
    var price = btn.parentElement.children[1].innerText
    var image1 = btn.parentElement.parentElement.parentElement.children[0].children[0].children[0].children[0].children[0].src
    var image2 = btn.parentElement.parentElement.parentElement.children[0].children[0].children[0].children[1].children[0].src
    var image3 = btn.parentElement.parentElement.parentElement.children[0].children[0].children[0].children[2].children[0].src
    var image4 = btn.parentElement.parentElement.parentElement.children[0].children[0].children[0].children[3].children[0].src
    var image5 = btn.parentElement.parentElement.parentElement.children[0].children[0].children[0].children[4].children[0].src
    var image6 = btn.parentElement.parentElement.parentElement.children[0].children[0].children[0].children[5].children[0].src
    displayIndiRoom(roomType, price, image1, image2, image3, image4, image5, image6)
    // console.log(roomType, price, image1, image2, image3, image4, image5, image6)
}

function displayIndiRoom(roomType, price, image1, image2, image3, image4, image5, image6) {
    var displayRoom = document.createElement('div')
    var store = document.getElementsByClassName('store')[0]
    var newDisplayRoom = `
    <!-- room -->
    <div id="room" style="height: 20vh; margin-top: -8rem;"></div>
    <div class="container" style=" width: 70%; margin: 0rem auto 8rem auto; border: 2px solid #7b5c34;">
    
        <div class="card2">
            <h1 class="card-header">${roomType}<p
                    style="font-size: 1rem; margin: 3.5vh 0 0 2vh; color: grey;">
                    ${price}</p>
            </h1>
            <div class="card-body indi-room-body">
                <p class="card-text" style="justify-self: flex-start;">Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Quae aut ea eos explicabo harum magni labore commodi consequuntur totam?
                    Tempora!
                </p>
                <div class="essentials">
                    <div class="service-wrapper room"><img
                            src="https://assets.website-files.com/5f28567562c2bb7095a14f34/5f2ac97b7d9af7564d238138_icon-room-service-01-hotel-template.svg"
                            alt="" class="service-icon">
                        <div class="service-text">1</div>
                        <div class="service-text">Person</div>
                    </div>
                    <div class="service-wrapper room"><img
                            src="https://assets.website-files.com/5f28567562c2bb7095a14f34/5f2ac97d964e1a7c485129ab_icon-room-service-02-hotel-template.svg"
                            alt="" class="service-icon">
                        <div class="service-text">1</div>
                        <div class="service-text">King Bed</div>
                    </div>
                    <div class="service-wrapper room"><img
                            src="https://assets.website-files.com/5f28567562c2bb7095a14f34/5f2ac97b7765aeb33ebe6464_icon-room-service-03-hotel-template.svg"
                            alt="" class="service-icon">
                        <div class="service-text">2</div>
                        <div class="service-text">Bathrooms</div>
                    </div>
                    <div class="service-wrapper room"><img
                            src="https://assets.website-files.com/5f28567562c2bb7095a14f34/5f2ac97de092063cd47b9c77_icon-room-service-04-hotel-template.svg"
                            alt="" class="service-icon">
                        <div class="service-text">Breakfast</div>
                        <div class="service-text">Included</div>
                    </div>
                </div>
                <hr style="width: 70%;">
                <h1>Amenities</h1>
                <div data-w-id="ebeec582-3ad9-db20-46c6-cfa6f297d083"
                    style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); opacity: 1; transform-style: preserve-3d;"
                    class="amenities">
                    <div class="amenities-service-wrapper"><img
                            src="https://assets.website-files.com/5f28567562c2bb7095a14f34/5f2ae8be67cda452a81d150f_icon-amenities-01-hotel-template.svg"
                            alt="" class="icon-amenities">
                        <div class="amenities-text">Wifi</div>
                    </div>
                    <div class="amenities-service-wrapper"><img
                            src="https://assets.website-files.com/5f28567562c2bb7095a14f34/5f2ae8bfda70f19518e7509f_icon-amenities-04-hotel-template.svg"
                            alt="" class="icon-amenities">
                        <div class="amenities-text">Heathen</div>
                    </div>
                    <div class="amenities-service-wrapper"><img
                            src="https://assets.website-files.com/5f28567562c2bb7095a14f34/5f2ae8c03741f5c4f8c36915_icon-amenities-07-hotel-template.svg"
                            alt="" class="icon-amenities">
                        <div class="amenities-text">Coffe</div>
                    </div>
                    <div class="amenities-service-wrapper"><img
                            src="https://assets.website-files.com/5f28567562c2bb7095a14f34/5f2ae8bf1987560aeb6646d3_icon-amenities-02-hotel-template.svg"
                            alt="" class="icon-amenities">
                        <div class="amenities-text">TV</div>
                    </div>
                    <div class="amenities-service-wrapper"><img
                            src="https://assets.website-files.com/5f28567562c2bb7095a14f34/5f2ae8bfcddb47e175f25d6c_icon-amenities-05-hotel-template.svg"
                            alt="" class="icon-amenities">
                        <div class="amenities-text">Laundry<br>Service</div>
                    </div>
                    <div class="amenities-service-wrapper"><img
                            src="https://assets.website-files.com/5f28567562c2bb7095a14f34/5f2ae8c20b91a88651b7c3a9_icon-amenities-08-hotel-template.svg"
                            alt="" class="icon-amenities">
                        <div class="amenities-text">Mini Bar</div>
                    </div>
                    <div class="amenities-service-wrapper"><img
                            src="https://assets.website-files.com/5f28567562c2bb7095a14f34/5f2ae8bfcddb476ae0f25d6b_icon-amenities-03-hotel-template.svg"
                            alt="" class="icon-amenities">
                        <div class="amenities-text">Spa</div>
                    </div>
                    <div class="amenities-service-wrapper"><img
                            src="https://assets.website-files.com/5f28567562c2bb7095a14f34/5f2ae8c0a693ac6fd8c62d90_icon-amenities-06-hotel-template.svg"
                            alt="" class="icon-amenities">
                        <div class="amenities-text">Business<br>Center</div>
                    </div>
                    <div class="amenities-service-wrapper"><img
                            src="https://assets.website-files.com/5f28567562c2bb7095a14f34/5f2ae8c16d5db4251a583e2f_icon-amenities-10-hotel-template.svg"
                            alt="" class="icon-amenities">
                        <div class="amenities-text">GYm</div>
                    </div>
                </div>
                <hr style="width: 70%;">
                <div class="btns">

                    <a href="#gallery" class="custom-btn btn">Photo Gallery</a>
                    <a href="#book" class="custom-btn btn ">Book Now</a>
                </div>
            </div>
        </div>
    </div>
    <!-- photo gallery -->
    <div class="photo-gallery container">
        <h1 id="gallery">Gallery</h1>
        <hr>
        <div class="row g-0 image-gallery">
            <div>
                <img src="${image1}" alt="" srcset="">
            </div>
            <div>
                <img src="${image2}" alt="" srcset="">
            </div>
            <div>
                <img src="${image3}" alt="" srcset="">
            </div>
            <div>
                <img src="${image4}" alt="" srcset="">
            </div>
            <div>
                <img src="${image5}" alt="" srcset="">
            </div>
            <div>
                <img src="${image6}" alt="" srcset="">
            </div>
        </div>
    </div>
    <!-- room booking -->
    <div class="container room-book">
        <h1 id="book">Book A Room</h1>
        <div class="row g-0 book">
            <div class="col-6">
                <input type="date" class="form-control" placeholder="chehcin" aria-label="First name">
            </div>
            <div class="col-6">
                <input type="date" class="form-control" placeholder="Last name" aria-label="Last name">
            </div>
            <div class="col-6">
                <select id="inputState" class="form-select">
                    <option selected>Adults</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
            <div class="col-6">
                <select id="inputState" class="form-select">
                    <option selected>Kids</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
            <div class="col-12">
                <input type="submit" class="form-control" placeholder="" aria-label="">
            </div>
        </div>
    </div>
    `
    displayRoom.innerHTML = newDisplayRoom
    // store.append(displayRoom)
    store.insertBefore(displayRoom, store.firstChild)
    store.style.display = "block"
    document.querySelector('.cancel').style.display = "block"
}
document.querySelector('.cancel').addEventListener("click", () => {
    document.getElementsByClassName('store')[0].style.display = "none"
    document.getElementsByClassName('store')[0].removeChild(document.getElementsByClassName('store')[0].children[0])
    document.querySelector('.cancel').style.display = "none"
})

