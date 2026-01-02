//prendere container
const container = document.querySelector(".container");
console.log(container)

//creare grid 16 x 16
const rowBox = function () {
    //ciclo per row
    for (let i = 1; i < 17; i++) {
    const row = document.createElement("div");
    container.appendChild(row);
    row.classList.add("row");
    //ciclo per box
    for (let i = 1; i < 17; i++) {
        const a = document.createElement("div");
        row.appendChild(a);
        a.textContent = "a" + i;
        a.classList.add("gridBox");
    }
   }
}

 
rowBox();
