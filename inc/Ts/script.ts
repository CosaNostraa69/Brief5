
import cartman from '../assets/images/download-removebg-preview (1).png'
import butters from '../assets/images/butters1-removebg-preview.png'
import kenny from '../assets/images/kenny-removebg-preview.png'
import kennyDead from '../assets/images/kennydead.png'
import cartmanDead from '../assets/images/cartmancry.jpeg'
import ButtersSad from '../assets/images/butterssad.png'



const choixPerso: HTMLElement | null = document.getElementById('hidden_class1')
const Jeu: HTMLElement | null = document.getElementById('display_none')
const inputUserName = document.getElementById('name_input') as HTMLInputElement;

let perso = {
  first_button: `${cartman}`,
  second_button: `${butters}`,
  third_button: `${kenny}`,
};
let bouton = "first_button";

function choisirPersonnage(button) {
  if (Object.keys(perso).includes(button)) {
    let perso_image = perso[button];
    const image:HTMLImageElement = document.createElement("img")
    image.src = `${perso_image}`;


    document.querySelector(".left_column")?.appendChild(image);
  }
}

const buttonChoice1 = document.getElementById("first_button")!;
buttonChoice1.addEventListener("click", function () {
  
  if (inputUserName){
    console.log(inputUserName);
    
    if(inputUserName.value?.trim() !== ""){
      choisirPersonnage("first_button");
      choixPerso?.remove();
      Jeu?.classList.remove('hidden')
    }
  }


});

const buttonChoice2 = document.getElementById("second_button")!;
buttonChoice2.addEventListener("click", function () {

  if (inputUserName){
    console.log(inputUserName);
    
    if(inputUserName.value?.trim() !== ""){

  choisirPersonnage("second_button");
  choixPerso?.remove();
  Jeu?.classList.remove('hidden')
}
}

});

const buttonChoice3 = document.getElementById("third_button")!;
buttonChoice3.addEventListener("click", function () {

  if (inputUserName){
    console.log(inputUserName);
    
    if(inputUserName.value?.trim() !== ""){

  choisirPersonnage("third_button");
  choixPerso?.remove();
  Jeu?.classList.remove('hidden')
}
}

});


let characterName: string = "";

const nameInput = document.getElementById("name_input") as HTMLInputElement;

nameInput.addEventListener("input", (event) => {
  characterName = (event.target as HTMLInputElement).value;
  
  const rightText = document.querySelector(".right_text") as HTMLElement;

  rightText.innerText = `Le nom de votre personnage est : ${characterName}`;
});



const healthBar = document.getElementById('health_bar') as HTMLProgressElement;
const hungerBar = document.getElementById('hunger_bar') as HTMLProgressElement;
const thirstBar = document.getElementById('thirst_bar') as HTMLProgressElement;
const healButton = document.getElementById('heal_button') as HTMLButtonElement;
const feedButton = document.getElementById('feed_button') as HTMLButtonElement;
const waterButton = document.getElementById('water_button') as HTMLButtonElement;

let healthPoints = 100;
let hungerPoints = 100;
let thirstPoints = 100;

function decreaseBars() {
  if (healthPoints > 50) {
    healthPoints -= 10;
  } else if (healthPoints > 15) {
    healthPoints -= 6;
  } else {
    healthPoints -= 2;
  }
  if (hungerPoints > 50) {
    hungerPoints -= 10;
  } else if (hungerPoints > 15) {
    hungerPoints -= 6;
  } else {
    hungerPoints -= 2;
  }
  if (thirstPoints > 50) {
    thirstPoints -= 10;
  } else if (thirstPoints > 15) {
    thirstPoints -= 6;
  } else {
    thirstPoints -= 2;
  }
  updateBars();
}

function updateBars() {
  healthBar.value = healthPoints;
  hungerBar.value = hungerPoints;
  thirstBar.value = thirstPoints;
}

function heal() {
  if (healthPoints < 100) {
    healthPoints += 10;
    if (healthPoints > 100) {
      healthPoints = 100;
    }
    updateBars();
  }
}

function feed() {
  if (hungerPoints < 100) {
    hungerPoints += 10;
    if (hungerPoints > 100) {
      hungerPoints = 100;
    }
    updateBars();
  }
}

function water() {
  if (thirstPoints < 100) {
    thirstPoints += 10;
    if (thirstPoints > 100) {
      thirstPoints = 100;
    }
    updateBars();
  }
}

healButton.addEventListener('click', heal);
feedButton.addEventListener('click', feed);
waterButton.addEventListener('click', water);

setInterval(decreaseBars, 10000);


function decreaseBars() {
  let characterImage = document.querySelector(".left_column img") as HTMLImageElement;
  let characterSrc = characterImage.src;

  if (healthPoints > 50) {
    healthPoints -= 10;
  } else if (healthPoints > 15) {
    healthPoints -= 6;
  } else {
    healthPoints -= 2;
    characterImage.src = `${kenny}`;
  }
  if (hungerPoints > 50) {
    hungerPoints -= 10;
  } else if (hungerPoints > 15) {
    hungerPoints -= 6;
  } else {
    hungerPoints -= 2;
    characterImage.src = `${butters}`;
  }
  if (thirstPoints > 50) {
    thirstPoints -= 10;
  } else if (thirstPoints > 15) {
    thirstPoints -= 6;
  } else {
    thirstPoints -= 2;
    characterImage.src = `${cartman}`;
  }

  // If the character image has changed, log a message to the console
  if (characterImage.src !== characterSrc) {
    console.log("Character image changed!");
  }

  updateBars();
}
