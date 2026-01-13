
function loadUp(num){

    // checking that user input is reasonable
    if (num > 100) { num = 100; }
    else if (num < 0) { num = 0; }

    // grabbing parent container for everything else later
    let container = document.querySelector(".container");

    // check for blocks to already be created
    let prev = document.querySelectorAll(".boxes");

    // removing previous boxes
    if (prev.length > 0) {
        for (i=0; i<prev.length; i++) {
            container.removeChild(prev[i]);
        }
    }

    // creating new set of boxes
    for (i=0; i<num; i++) {
        let blocks = document.createElement("div");
        blocks.setAttribute("id", `block-${i}`);
        blocks.classList.add("boxes");
        blocks.addEventListener("mouseenter", function(e) {
            blocks.style.backgroundColor = "gray";
        });
        container.appendChild(blocks);
    }
}

// once document is loaded, add event listener to user input
document.addEventListener('DOMContentLoaded', function() {
    let input = document.getElementById("grid-no");
    input.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            loadUp(this.value);
        }
    });
});