const boutonStyle = document.getElementById("style-toggle");
if(boutonStyle){
    boutonStyle.addEventListener("click", function() {
        document.body.classList.toggle("alternative-style");
    });
}
