function menuPhone() {
    console.log("Oi");
    if(document.querySelector(".menu nav ul").style.display == 'flex') {
        document.querySelector(".menu nav ul").style.display = 'none';
    } else {
        document.querySelector(".menu nav ul").style.display = 'flex';
    }
}