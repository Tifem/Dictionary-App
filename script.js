const container = document.querySelector(".container"),
searchInput = container.querySelector("input"),
infoText = container.querySelector(".info-text");

function data(result, word){
    if(result.title){
        infoText.innerHTML = `Can't find the meaning of <span>"${word}"</span>. please try to search for another word. `;
    }else{
        console.log(result);
        container.classList.add("active");
    }
}

function fetchApi(word){
    infoText.style.color="#000";
    infoText.innerHTML = `Searching the meaning of <span>"${word}"</span> ` ;
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    fetch(url).then(res =>res.json()).then(result => data(result, word));
}

searchInput.addEventListener("keyup", e=>{
    if(e.key === "Enter" && e.target.value){
        fetchApi(e.target.value)
    }else{

    }
})

async function fetchApi(word){
    const response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/${word}');
    const data = response.json()
}