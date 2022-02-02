import data from "./data.js"

const {arrayGame,arrayImage} = data;

const rock = document.querySelector(".container_item--rock");
const paper = document.querySelector(".container_item--paper");
const scissors = document.querySelector(".container_item--scissors");
const again = document.querySelector(".prompt__item--button");

const person = document.querySelector(".result__item--user");
const pc = document.querySelector(".result__item--pc");

const prompt = document.querySelector(".prompt");
const promptResult = document.querySelector(".prompt__item--result");

const random = ()=>{
    pc.removeAttribute("value");
    const random = Math.floor(Math.random()*3);

    pc.innerHTML = "";
    pc.innerHTML = `<img src="${arrayImage[random]}" alt="${arrayGame[random]}">`;
    pc.setAttribute("value",arrayGame[random]);
}

const showPerson = (item)=>{    
    person.innerHTML = "";
    
    switch (item) {
    case 'Rock':
        person.innerHTML = `<img src="${arrayImage[0]}" alt="Rock">`;
        break;
    case 'Paper':
        person.innerHTML = `<img src="${arrayImage[1]}" alt="Paper">`;
        break;
    case 'Scissors':
        person.innerHTML = `<img src="${arrayImage[2]}" alt="Scissors">`;
        break;
    default:
        person.innerHTML = `<img src="#" alt="Error">`;
    }
}

const hidden = ()=>{
    document.querySelector(".container").classList.toggle("hidden");
    prompt.classList.toggle("hidden");
}

const choiceRock = ()=>{
    showPerson("Rock");
    random();

    if(pc.getAttribute("value") == "Rock"){
        promptResult.innerHTML = "Empate";
    }else if(pc.getAttribute("value") == "Paper"){
        promptResult.innerHTML = "Perdiste";
    }else{
        promptResult.innerHTML = "Ganaste";
    }

    hidden();
};

const choicePaper = ()=>{
    showPerson("Paper")
    random();

    if(pc.getAttribute("value") == "Paper"){
        promptResult.innerHTML = "Empate";
    }else if(pc.getAttribute("value") == "Scissors"){
        promptResult.innerHTML = "Perdiste";
    }else{
        promptResult.innerHTML = "Ganaste";
    }

    hidden();
};

const choiceScissors = ()=>{
    showPerson("Scissors");
    random();

    if(pc.getAttribute("value") == "Scissors"){
        promptResult.innerHTML = "Empate";
    }else if(pc.getAttribute("value") == "Rock"){
        promptResult.innerHTML = "Perdiste";
    }else{
        promptResult.innerHTML = "Ganaste";
    }

    hidden();
};


const choice = (item,callBack)=>{
    item.addEventListener("click",callBack);
}

choice(rock,choiceRock);
choice(paper,choicePaper);
choice(scissors,choiceScissors);
choice(again,()=>location.reload());

