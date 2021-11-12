const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const menuClip = document.getElementById("clip");


hamburger.addEventListener("click", function(e) {
    
    if(!menu.className && !menuClip.className) {
        menu.className = "show";
        menuClip.style.display = "block";
    } else {
        menu.className = "";
        menuClip.style.display = "none";
    }
        
});
