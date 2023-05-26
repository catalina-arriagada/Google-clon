const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#google-search-btn");
const luckButton = document.querySelector("#luck-btn");

searchInput.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        search();
    }
});

searchButton.addEventListener("click", () => {
    search();
});

luckButton.addEventListener("click", () => {
    window.location.href = "https://www.google.com/doodles";
});

function search() {
    const input = searchInput.value; // instanciamos valor que hay dentro de searchInput en input
    window.location.href = "https://www.google.com/search?q=" + input + "&sxsrf=APwXEde7eEIkVFYDOFKG4gHRBrr5mE9XNw%3A1685061431016&ei=N_9vZItP1OTWxA_OjrvwCQ&ved=0ahUKEwjLxpSA35H_AhVUspUCHU7HDp4Q4dUDCA8&uact=5&oq=" + input + "&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCCMQigUQJzIHCCMQigUQJzITCC4QigUQsQMQgwEQxwEQ0QMQQzIHCAAQigUQQzINCAAQigUQsQMQgwEQQzIHCAAQigUQQzINCAAQigUQsQMQgwEQQzINCAAQigUQsQMQgwEQQzIHCAAQigUQQzINCAAQigUQsQMQgwEQQzoECCMQJzoTCC4QgwEQxwEQsQMQ0QMQigUQQzohCC4QigUQsQMQgwEQxwEQ0QMQQxCXBRDcBBDeBBDgBBgBSgQIQRgAUABY4QRg5gxoAHABeACAAd4CiAGVBpIBBzMuMi4wLjGYAQCgAQHAAQHaAQYIARABGBQ&sclient=gws-wiz-serp";

    //reemplazamos la url de una busqueda con el valor input (que ingresa usuario)
}