let bodyColors = [
  "#a8d530",
  "#42aaff",
  "#f3d55b",
  "#ff4f51",
  "#904ae8",
  "#ffa711",
];

const colors = [...bodyColors, "transparent"];

let [faceCounter, colorCounter, hornCounter, tailCounter] = Array(4).fill(0);

const $ = document;
const faceBtn = $.querySelector("#face-btn");
const colorBtn = $.querySelector("#color-btn");
const hornsBtn = $.querySelector("#horns-btn");
const tailBtn = $.querySelector("#tail-btn");
const faceImg = $.querySelector("#face");

const setCounter = (counter, length) => {
  console.log(counter, length);
  console.log(bodyColors.length);
  return counter < length - 1 ? counter + 1 : 0;
  // چرا اینجا counter++ جواب نمیده؟
};

// Change face
faceBtn.addEventListener("click", () => {
  faceCounter = setCounter(faceCounter, 6);
  faceImg.setAttribute("src", `face-${faceCounter}.png`);
});

// Change color
colorBtn.addEventListener("click", () => {
  colorCounter = setCounter(colorCounter, bodyColors.length);
  $.documentElement.style.setProperty(
    "--color-character",
    `${bodyColors[colorCounter]}`,
  );
});

// Change horns
hornsBtn.addEventListener("click", () => {
  hornCounter = setCounter(hornCounter, colors.length);
  $.documentElement.style.setProperty(
    "--color-horns",
    `${colors[hornCounter]}`,
  );
});

// Change tails
tailBtn.addEventListener("click", () => {
  tailCounter = setCounter(tailCounter, colors.length);
  $.documentElement.style.setProperty("--color-tail", `${colors[tailCounter]}`);
});
