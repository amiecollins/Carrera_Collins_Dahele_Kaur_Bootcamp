//Sidebar functionality
function toggle() {
    document.getElementById("nav-toggler").classList.toggle("fa-times");
    document.getElementById("nav-toggler").classList.toggle("fa-bars");
    document.getElementById("sidebar").classList.toggle("active");
}

//Home background slideshow
var count = 0;
const bg_classes = ["one", "two", "three", "four"];
const target_id = document.getElementById("bg-change");
slideshow();

function slideshow () {

    if ( count < bg_classes.length ) {
        count++
        target_id.classList.add(bg_classes[count - 1]);
        target_id.classList.remove(bg_classes[count]);
        target_id.classList.remove(bg_classes[count + 1]);
        target_id.classList.remove(bg_classes[count + 2]);
    } else {
        count = 0;  
    }

    setTimeout(slideshow, 10000);
}
