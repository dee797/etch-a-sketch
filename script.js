function addDivs(dimensions) {
    const container = document.querySelector("body > .container");

    for (let i = 0; i < dimensions; i++) {
        const divRow = document.createElement("div");
        divRow.classList.add("row");
        container.appendChild(divRow);

        for (let i = 0; i < dimensions; i++) {
            const divColumn = document.createElement("div");
            divColumn.classList.add("column");
            divColumn.addEventListener("mouseover", () =>{
                divColumn.style.backgroundColor = "blue";
            }) ;
            divRow.appendChild(divColumn);
        }
    }
}


function removeDivs() {
    const divRows = document.querySelectorAll("body .row");
    for (const row of divRows) {
        row.remove()
    }
}


function changeGrid() {
    let dimensions = prompt(`How many squares would you like per side?
    Note that this will erase your previous sketch pad.`);

    while (dimensions !== null) {
        const temp = parseInt(dimensions);
        
        if (isNaN(temp) || temp > 100 || temp < 1) {
            alert("Invalid entry. Please enter a number between 1 and 100.");
            dimensions = prompt(`How many squares would you like per side?\n
Note that this will erase your previous sketch pad.`);
            
        } else {
            dimensions = temp;
            break
        }
    }

    if (dimensions === null) throw "User clicked cancel";

    removeDivs();
    addDivs(dimensions);
}


function createButton() {
    const changeGridBtn = document.createElement("button");
    const container = document.querySelector("body .container");

    changeGridBtn.textContent = "Change grid area"; 
    document.body.insertBefore(changeGridBtn, container);

    changeGridBtn.addEventListener("click", () => changeGrid())
}


addDivs(16);
createButton();