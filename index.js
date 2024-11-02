const container = document.querySelector(".container");
const searchInput = document.querySelector("input");
const infoText = document.querySelector(".info-text");
const wrapper = document.querySelector(".wrapper");
const btn = document.querySelector('.btn')
const wrapperUL = document.querySelector(".wrapper ul");



const dictionary = [
    {
        word: 'happy',
        meaning: 'feeling or showing pleasure or contentment',
        example: 'I am happy to see you.',
        synonyms: ['excited', 'joy'],
        phonetics: "/ˈhæpiː/",
        partOfSpeech: "noun"

    },

    {
        word: 'sad',
        meaning: 'feeling or showing sorrow or unhappiness',
        example: 'I am sad to see you go.',
        synonyms: ['unhappy', 'gloomy'],
        phonetics: "/sæd/",
        partOfSpeech: "adjective"

    },

    {
        word: 'angry',
        meaning: 'feeling or showing strong displeasure',
        example: 'I am angry with you.',
        synonyms: ['furious', 'enraged'],
        phonetics: "/ˈæŋ.ɡɹi/",
        partOfSpeech: "adjective"
    }



];


btn.addEventListener('click', () => {
    wrapperUL.innerHTML = '';
    const searchWord = searchInput.value.toLowerCase();
    dictionary.forEach(obj => {
        if (searchWord === obj.word) {
            
        const contentList = document.createElement("ul")    
        const meaningList = document.createElement("li");
        const meaningDetails = document.createElement("div");
        const meaningParagraph = document.createElement("p");
        const meaningSpan = document.createElement("span");
        
        contentList.classList.add("content");
        meaningList.classList.add("meaning");
        meaningDetails.classList.add("details");

        meaningParagraph.textContent = "Meaning";
        meaningSpan.textContent = obj.meaning;

        
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
        detailSpan.textContent = obj.example;

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
        listSpan.textContent = obj.synonyms;


        list.appendChild(listSpan);
        synonymsDetails.appendChild(synonymsParagraph);
        synonymsDetails.appendChild(list)
        synonymsList.appendChild(synonymsDetails)
        contentList.appendChild(synonymsList)
        }
    })


})


const findWordMeaning = async (word) =>{
    const request = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const response = await request.json();
    console.log(response)
}



// async function findWordMeaning(word){
//     const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
//     const data = await response.json();

//     if(response.status === 200){
//         console.log(data)
//     }else{
//         console.error()
//     }
// }
