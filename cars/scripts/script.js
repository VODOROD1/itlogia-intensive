document.getElementsByClassName('main-title')[0].style.color = "red"
document.getElementById('main-action').onclick = function() {
    document.getElementById("cars").scrollIntoView({behavior: "smooth"})
}

let carsButtons = document.getElementsByClassName("car-item")

for(let i=0; i<carsButtons.length; i++) {
    carsButtons[i].onclick = function() {
        document.getElementById("price").scrollIntoView({behavior: "smooth"})
    }
}

document.getElementById('price-action').onclick = function() {
    if(document.getElementById('name-input').value === "") {
        alert("Заполните поле имя!")
    }
    if(document.getElementById('telephone-input').value === "") {
        alert("Заполните поле имя!")
    }
    if(document.getElementById('car-input').value === "") {
        alert("Заполните поле имя!")
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
            elem.style.backgroundPositionX = '0' + (0.3 * window.pageYOffset) + 'px';
    })

    let layer = document.querySelector('.price-image');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' +
        ((event.clientX * 0.4) / 8) + 'px,' +
        ((event.clientY * 0.4) / 8) + 'px,0px)';
    });
})
