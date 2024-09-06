function createDivGrid() {
    const container = document.querySelector("body > .container");

    for (let i = 0; i < 16; i++) {
        const divRow = document.createElement("div");
        divRow.classList.add("row");
        divRow.innerText = `\u00A0`;
        container.appendChild(divRow);

        for (let i = 0; i < 16; i++) {
            const divColumn = document.createElement("div");
            divColumn.classList.add("column");
            divColumn.innerText = `\u00A0`;
            divRow.appendChild(divColumn);
        }
    }
}

createDivGrid();