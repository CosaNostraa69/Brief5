// const button1: HTMLButtonElement = document.getElementById("button_1") as HTMLButtonElement;
// const hiddenClass1: HTMLDivElement = document.getElementById("hidden_class1") as HTMLDivElement;
// const hiddenClass2: HTMLDivElement = document.getElementById("hidden_class2") as HTMLDivElement;

// button1.addEventListener("click", () => {
//   hiddenClass1.classList.add("hidden");
//   hiddenClass1.classList.remove("display");

//   hiddenClass2.classList.add("display");
//   hiddenClass2.classList.remove("hidden");
// });

console.log("hello");

// const button = document.getElementById("button_1");
// const hiddenClass1 = document.getElementById("hidden_class1");
// const hiddenClass2 = document.getElementById("hidden_class2");

// button.addEventListener("click", () => {
//   hiddenClass1.classList.add("hidden");
//   hiddenClass1.classList.remove("display");

//   hiddenClass2.classList.add("display");
//   hiddenClass2.classList.remove("hidden");
// })
// ;

import test from '../assets/images/butters1-removebg-preview.png'

let perso = {
  first_button: "./Eric-cartman1-removebg-preview.png",
  second_button: `${test}`,
  third_button: "./kenny-removebg-preview.png",
};
let bouton = "first_button";

function choisirPersonnage(button) {
  if (Object.keys(perso).includes(button)) {
    let perso_image = perso[button];
    const image:HTMLImageElement = document.createElement("img")
    image.src = `${test}`;


    document.querySelector(".left_column")?.appendChild(image);
  }
  var elementPersonnage: HTMLElement = document.querySelector(
    ".personnage" + button
  )!;

  elementPersonnage.style.border = "2px solid red";
}

const buttonChoice1 = document.getElementById("first_button")!;
buttonChoice1.addEventListener("click", function () {
  choisirPersonnage("first_button");
});

const buttonChoice2 = document.getElementById("second_button")!;
buttonChoice2.addEventListener("click", function () {
  choisirPersonnage("second_button");
});

const buttonChoice3 = document.getElementById("third_button")!;
buttonChoice3.addEventListener("click", function () {
  choisirPersonnage("third_button");
});
