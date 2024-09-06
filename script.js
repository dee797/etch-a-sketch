function createDivGrid() {
    const container = document.querySelector("body > .container");

    for (let i = 0; i < 16; i++) {
        const divRow = document.createElement("div");
        divRow.classList.add("row");
        container.appendChild(divRow);

        for (let i = 0; i < 16; i++) {
            const divColumn = document.createElement("div");
            divColumn.classList.add("column");
            divColumn.addEventListener("mouseover", () =>{
                divColumn.style.backgroundColor = "blue";
            }) ;
            divRow.appendChild(divColumn);
        }
    }

    const changeGridBtn = document.createElement("button");
    changeGridBtn.textContent = "Change grid area"; 
    document.body.insertBefore(changeGridBtn, container);
}

createDivGrid();