const checkbox = document.querySelectorAll(".checkbox");
checkbox.forEach(function(checkbox) {
checkbox.addEventListener("click", function() {
    const parentDiv = checkbox.closest("div");
    if(this.checked ){
        parentDiv.style = "background-color: #c5b1e73d ;border: 3px solid #5A00F3;";
    }
    else {
        parentDiv.style = "background-color: white;";
    }
});
});