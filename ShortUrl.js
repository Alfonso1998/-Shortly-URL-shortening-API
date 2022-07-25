const Hamburger = document.getElementById("hamburger");
const Header = document.getElementById("header");
const Input = document.getElementById("input");
const Button = document.getElementById("button");
const DivLink = document.getElementById("Crea");

Hamburger.addEventListener("click", () => {
    Header.classList.toggle("active");
})


function CreateUl() {
    const Short = ` https://api.shrtco.de/v2/shorten?url=${Input.value}`;
    fetch(Short)
        .then(response => response.json())
        .then(data => {

            console.log(data.result.short_link);
            let Link = document.createElement("div");
            let Paragrafo = document.createElement("p");
            let Url = document.createElement("div");
            let Sito = document.createElement("a")
            let Butt = document.createElement("button");


            DivLink.appendChild(Link);
            Link.setAttribute("class", "link");
            Paragrafo.setAttribute("id", "Para");
            Url.setAttribute("class", "short");
            Sito.setAttribute("id", "sito");
            Butt.setAttribute("class", "link");
            Link.appendChild(Paragrafo);
            Link.appendChild(Url);
            Url.appendChild(Sito);
            Url.appendChild(Butt);


            Paragrafo.innerHTML = data.result.original_link;
            Butt.innerHTML = "Copy";
            Sito.innerHTML = data.result.short_link;
            Sito.href = data.result.original_link;
            Butt.addEventListener("click", () => {
                Butt.style.backgroundColor = "hsl(255, 11%, 22%)";
                Butt.innerHTML = "Copied";
                navigator.clipboard.writeText(Sito);

            })
        })

        .catch(e => {
            alert("insert a valid url");
        })

}



Button.addEventListener("click", () => {

    if (Input.value != "") {
        CreateUl();
    } else {
        alert("Input cannot be empty , please insert a valid URL");
    }
})


Input.addEventListener("keydown", (event) => {
    if (event.which == 13) {
        CreateUl();
    }
})
