const container = document.querySelector(".container");
const searchInput = document.querySelector("input");
const infoText = document.querySelector(".info-text");
const wrapper = document.querySelector(".wrapper");
const btn = document.querySelector('.btn')
const wrapperUL = document.querySelector(".wrapper ul");


const findWordMeaning = async (word) => {
    const request = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const response = await request.json();
    const extractedResponse = response[0].meanings[0]
    return extractedResponse
}


btn.addEventListener('click', () => {
    wrapperUL.innerHTML = '';
    const searchWord = searchInput.value.toLowerCase();
    
    infoText.textContent = searchWord;

    findWordMeaning(searchWord).then((data) =>{
        // console.log(data)
        const contentList = document.createElement("ul")
        const meaningList = document.createElement("li");
        const meaningDetails = document.createElement("div");
        const meaningParagraph = document.createElement("p");
        const meaningSpan = document.createElement("span");

        contentList.classList.add("content");
        meaningList.classList.add("meaning");
        meaningDetails.classList.add("details");

        meaningParagraph.textContent = "Meaning";
        meaningSpan.textContent = data.definitions[0].definition;


        meaningDetails.appendChild(meaningParagraph);
        meaningDetails.appendChild(meaningSpan);

        meaningList.appendChild(meaningDetails);
        contentList.appendChild(meaningList)
        wrapperUL.appendChild(contentList);

        const exampleList = document.createElement("li");
        const exampleDetails = document.createElement("div");
        const detailsParagraph = document.createElement("p");
        const detailSpan = document.createElement("span");

        exampleList.classList.add("example");
        exampleDetails.classList.add("details");
        detailsParagraph.textContent = "Example";
        detailSpan.textContent = data.definitions[0].example;

        exampleDetails.appendChild(detailsParagraph);
        exampleDetails.appendChild(detailSpan);

        exampleList.appendChild(exampleDetails);
        contentList.appendChild(exampleList);

        const synonymsList = document.createElement("li");
        const synonymsDetails = document.createElement("div");
        const synonymsParagraph = document.createElement("p");
        const list = document.createElement("div");
        const listSpan = document.createElement("span");

        synonymsList.classList.add("synonyms");
        synonymsDetails.classList.add("details");
        synonymsParagraph.textContent = "Synonyms";
        list.classList.add("list");
        listSpan.textContent = data.synonyms;


        list.appendChild(listSpan);
        synonymsDetails.appendChild(synonymsParagraph);
        synonymsDetails.appendChild(list)
        synonymsList.appendChild(synonymsDetails)
        contentList.appendChild(synonymsList)
        
    })
    
    
    
    
})







