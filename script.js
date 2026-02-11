let bodyColors = [
  "#a8d530",
  "#42aaff",
  "#f3d55b",
  "#ff4f51",
  "#904ae8",
  "#ffa711",
];

let hornsColors = [
  "#a8d530",
  "#42aaff",
  "#f3d55b",
  "#ff4f51",
  "#904ae8",
  "#ffa711",
  "transparent",
];

let tailsColors = [
  "#a8d530",
  "#42aaff",
  "#f3d55b",
  "#ff4f51",
  "#904ae8",
  "#ffa711",
  "transparent",
];

let faceCounter = 0;
let colorCounter = 0;
let hornCounter = 0;
let tailCounter = 0;

const $ = document;
const faceBtn = $.querySelector("#face-btn");
const colorBtn = $.querySelector("#color-btn");
const hornsBtn = $.querySelector("#horns-btn");
const tailBtn = $.querySelector("#tail-btn");
const faceImg = $.querySelector("#face");

// Change face
faceBtn.addEventListener("click", () => {
  faceCounter++;
  if (faceCounter <= 5) {
    faceImg.setAttribute("src", `face-${faceCounter}.png`);
  } else {
    faceCounter = 0;
    faceImg.setAttribute("src", `face-${faceCounter}.png`);
  }
});

// Change color
colorBtn.addEventListener("click", () => {
  colorCounter++;
  if (colorCounter <= bodyColors.length - 1) {
    $.documentElement.style.setProperty(
      "--color-character",
      `${bodyColors[colorCounter]}`,
    );
  } else {
    colorCounter = 0;
    $.documentElement.style.setProperty(
      "--color-character",
      `${bodyColors[colorCounter]}`,
    );
  }
});

// Change horns
hornsBtn.addEventListener("click", () => {
  hornCounter++;
  if (hornCounter <= hornsColors.length - 1) {
    $.documentElement.style.setProperty(
      "--color-horns",
      `${hornsColors[hornCounter]}`,
    );
  } else {
    hornCounter = 0;
    $.documentElement.style.setProperty(
      "--color-horns",
      `${hornsColors[hornCounter]}`,
    );
  }
});

// Change tails
tailBtn.addEventListener("click", () => {
  tailCounter++;
  if (tailCounter <= tailsColors.length - 1) {
    $.documentElement.style.setProperty(
      "--color-tail",
      `${tailsColors[tailCounter]}`,
    );
  } else {
    tailCounter = 0;
    $.documentElement.style.setProperty(
      "--color-tail",
      `${tailsColors[tailCounter]}`,
    );
  }
});
