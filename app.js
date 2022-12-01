// function recolor() {}

// make x axis green and y axis blue
//

document.addEventListener("mousemove", function(event) {
    green = (event.clientX / window.innerWidth) * 255;
    blue = (event.clientY / window.innerHeight) * 255;
    document.body.style.backgroundColor = `rgb(0, ${green}, ${blue})`;
    // rgb(0, green, blue)
    // window.innerHeight;
    // window.innerWidth;
    // event.clientX;
    // event.clientY;


});