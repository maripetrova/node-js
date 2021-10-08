window.addEventListener("load", function () {
    let square = document.getElementsByClassName("square")[0];
    let colors = document.getElementsByClassName("color");
    for (let i = 0; i < colors.length; i++) {
        let color = colors[i];
        console.log(color.firstElementChild.outerHTML);

        color.addEventListener("click", function () {
            console.log(color.classList);
            square.innerHTML = color.firstElementChild.outerHTML;
            /*
             Методы свойства classList:
                - .add() - добавляет новый класс;
                - .remove() - удаляет класс;
                - .contains() - проверяет наличие класса у элемента, возвращает true или false
             */
            if (square.classList.length > 1) {
                for (let k = 0; k < square.classList.length; k++) {
                    if (square.classList[k] !== "square") {
                        square.classList.remove(square.classList[k]);
                    }
                }
            }
            for (let j = 0; j < color.classList.length; j++) {
                if (color.classList[j] !== "color") {
                    square.classList.add(color.classList[j]);
                }
            }

        })
    }
});
