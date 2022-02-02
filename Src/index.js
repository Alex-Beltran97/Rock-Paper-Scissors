const rock = document.querySelector(".container_item--rock");
const paper = document.querySelector(".container_item--paper");
const scissors = document.querySelector(".container_item--scissors");

const person = document.querySelector(".result__item--user");
const pc = document.querySelector(".result__item--pc");

const arrayGame = ["Rock","Paper","Scissors"];

const random = ()=>{
    pc.removeAttribute("value");
    const random = Math.floor(Math.random()*3);

    pc.innerHTML = "";
    pc.innerHTML = `${arrayGame[random]}`;
    pc.setAttribute("value",arrayGame[random]);
}

const showPerson = (item)=>{
    person.innerHTML = "";
    person.innerHTML = item;
}

const choiceRock = ()=>{
    showPerson("Rock");
    random();

    if(pc.getAttribute("value") == "Rock"){
        alert("Empate");
    }else if(pc.getAttribute("value") == "Paper"){
        alert("Perdiste");
    }else{
        alert("Ganaste");
    }
};

const choicePaper = ()=>{
    showPerson("Paper")
    random();

    if(pc.getAttribute("value") == "Paper"){
        alert("Empate");
    }else if(pc.getAttribute("value") == "Scissors"){
        alert("Perdiste");
    }else{
        alert("Ganaste");
    }
};

const choiceScissors = ()=>{
    showPerson("Scissors");
    random();

    if(pc.getAttribute("value") == "Scissors"){
        alert("Empate");
    }else if(pc.getAttribute("value") == "Rock"){
        alert("Perdiste");
    }else{
        alert("Ganaste");
    }
};

const choice = (item,callBack)=>{
    item.addEventListener("click",callBack);
}

choice(rock,choiceRock);
choice(paper,choicePaper);
choice(scissors,choiceScissors);

