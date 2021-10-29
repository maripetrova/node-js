let data = [
    {name: "first", src: "/images/1.jpg"},
    {name: "second", src: "/images/2.jpg"},
    {name: "third", src: "/images/3.jpg"},
    {name: "fourth", src: "/images/1.jpg"},
];

let outer = document.querySelector(".container");
data.forEach( e => {
   outer.innerHTML += `
        <div class="card" 
        data-src="${e.src}" 
        data-name="${e.name}"> ${e.name} </div>
   `;
});
let other = document.createElement("div");
other.className = "card";
other.style.height = "100px";
other.setAttribute("data-src", "/images/002.png");

let inp = document.createElement("input");

other.append(inp);
outer.append(other);
inp.addEventListener("click", e => {
    e.stopPropagation();
})
inp.addEventListener("input", ev => {
    ev.target.parentElement.setAttribute("data-name", ev.target.value);
})

/* *
* При нажатии на карточку отправляться на страницу с соответствующем котиком
* */
// Array.from(document.getElementsByClassName("card")).forEach()
outer.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", e => {
        // location.reload() - перезагрузить страницу
        location.replace(`/personal?name=${e.target.getAttribute("data-name")}&img=${e.target.getAttribute("data-src")}`) // отправить по-другому адресу
    })
})
