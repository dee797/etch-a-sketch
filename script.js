function createDivGrid() {
    const container = document.querySelector("body > .container");

    for (let i = 0; i < 16; i++) {
        const divRow = document.createElement("div");
        divRow.classList.add("row");
        container.appendChild(divRow);

        const divColumn = document.createElement("div");
        divColumn.classList.add("column");
        divRow.appendChild(divColumn);
    }
}