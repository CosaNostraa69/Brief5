import cartman from "../assets/images/download-removebg-preview (1).png";
import butters from "../assets/images/butters1-removebg-preview.png";
import kenny from "../assets/images/kenny-removebg-preview.png";
import kennyDead from "../assets/images/kennydead.png";
import cartmanDead from "../assets/images/cartmandead.png";
import ButtersSad from "../assets/images/buttersDead.png";
// import son from "../assets/sons/South-Park.mp3"

const choixPerso: HTMLElement | null = document.getElementById("hidden_class1");
const Jeu: HTMLElement | null = document.getElementById("display_none");
const inputUserName = document.getElementById("name_input") as HTMLInputElement;

const body = document.getElementsByTagName("body")[0];
const audioe = document.createElement("audio") as HTMLAudioElement;
audioe.setAttribute("autoplay", "autoplay");
audioe.id = "myAudio";
audioe.src = son;
audioe.autoplay = true;

let perso = {
  first_button: `${cartman}`,
  second_button: `${butters}`,
  third_button: `${kenny}`,
};
let persoDead = {
  first_button: `${cartmanDead}`,
  second_button: `${ButtersSad}`,
  third_button: `${kennyDead}`,
};

let bouton = "";

function choisirPersonnage(button) {
  if (Object.keys(perso).includes(button)) {
    bouton = button;
    let perso_image = perso[button];
    const image: HTMLImageElement = document.createElement("img");
    image.src = `${perso_image}`;

    document.querySelector(".left_column")?.appendChild(image);
  }
}

const buttonChoice1 = document.getElementById("first_button")!;
buttonChoice1.addEventListener("click", function () {
  if (inputUserName) {
    console.log(inputUserName);

    if (inputUserName.value?.trim() !== "") {
      choisirPersonnage("first_button");
      choixPerso?.remove();
      Jeu?.classList.remove("hidden");
    }
  }
});

const buttonChoice2 = document.getElementById("second_button")!;
buttonChoice2.addEventListener("click", function () {
  if (inputUserName) {
    console.log(inputUserName);

    if (inputUserName.value?.trim() !== "") {
      choisirPersonnage("second_button");
      choixPerso?.remove();
      Jeu?.classList.remove("hidden");
    }
  }
});

const buttonChoice3 = document.getElementById("third_button")!;
buttonChoice3.addEventListener("click", function () {
  if (inputUserName) {
    console.log(inputUserName);

    if (inputUserName.value?.trim() !== "") {
      choisirPersonnage("third_button");
      choixPerso?.remove();
      Jeu?.classList.remove("hidden");
    }
  }
});

let characterName: string = "";

const nameInput = document.getElementById("name_input") as HTMLInputElement;

nameInput.addEventListener("input", (event) => {
  characterName = (event.target as HTMLInputElement).value;

  const rightText = document.querySelector(".right_text") as HTMLElement;

  rightText.innerText = `Bienvenue à South Park : ${characterName}`;
});

const healthBar = document.getElementById("health_bar") as HTMLProgressElement;
const hungerBar = document.getElementById("hunger_bar") as HTMLProgressElement;
const thirstBar = document.getElementById("thirst_bar") as HTMLProgressElement;
const healButton = document.getElementById("heal_button") as HTMLButtonElement;
const feedButton = document.getElementById("feed_button") as HTMLButtonElement;
const waterButton = document.getElementById(
  "water_button"
) as HTMLButtonElement;

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

healButton.addEventListener("click", heal);
feedButton.addEventListener("click", feed);
waterButton.addEventListener("click", water);

const inter = setInterval(decreaseBars, 1000);

function decreaseBars() {
  let characterImage = document.querySelector(
    ".left_column img"
  ) as HTMLImageElement;
  let left_column = document.querySelector(
    ".left_column"
  ) as HTMLElement;
  let characterSrc;
  if (characterImage) characterSrc = characterImage.src;
  if (healthPoints <= 0 && hungerPoints <= 0 && thirstPoints <= 0) {
    clearInterval(inter)
    characterImage.src = persoDead[bouton];
    healButton.removeEventListener("click", heal);
    feedButton.removeEventListener("click", feed);
    waterButton.removeEventListener("click", water);
    console.log(left_column);
    
    left_column.style.animation = "none";
  }

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

  // If the character image has changed, log a message to the console

  if (characterImage && characterImage.src !== characterSrc) {
    console.log("Character image changed!");
  }

  updateBars();
}

