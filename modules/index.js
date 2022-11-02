// Your code goes here!
import { difference, modulo, percentage, percentageOf } from "./percentage.js";
import calculateAspectRatio from "./aspect-ratio.js";

const inputs = document.querySelectorAll("input");

document.querySelector("#modulo-form").addEventListener("change", () => {
  inputs[2].value = modulo(Number(inputs[0].value), Number(inputs[1].value));
});

document.querySelector("#percentage-form").addEventListener("change", () => {
  inputs[5].value = percentage(
    Number(inputs[3].value),
    Number(inputs[4].value)
  );
});

document.querySelector("#percentageOf-form").addEventListener("change", () => {
  inputs[8].value = percentageOf(
    Number(inputs[6].value),
    Number(inputs[7].value)
  );
});

document.querySelector("#difference-form").addEventListener("change", () => {
  inputs[11].value = difference(
    Number(inputs[9].value),
    Number(inputs[10].value)
  );
});

document.querySelector("#aspect-form").addEventListener("change", (e) => {
  const oriW = Number(inputs[12].value);
  const oriH = Number(inputs[13].value);
  if (e.target.id === "ratio_result-width") {
    inputs[15].value = calculateAspectRatio(
      oriW,
      oriH,
      Number(inputs[14].value),
      "w"
    );
  }
  if (e.target.id === "ratio_result-height") {
    inputs[14].value = calculateAspectRatio(
      oriW,
      oriH,
      Number(inputs[15].value),
      "h"
    );
  }
});
