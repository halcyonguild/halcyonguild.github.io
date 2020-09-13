function openNav() {
    document.getElementById("navigation").style.width = "75vw";
    document.getElementById("navigation").style.padding = "15px 24px 24px 24px";
}

function closeNav() {
    document.getElementById("navigation").style.width = "0";
    setTimeout(function() { document.getElementById("navigation").style.padding = "15px 0 24px 0"; }, 50);
}