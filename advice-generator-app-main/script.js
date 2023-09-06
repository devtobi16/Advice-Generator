const button = document.querySelector("button");
const advice = document.querySelector("h2");
const adviceId = document.querySelector("h3");
document.addEventListener(`DOMContentLoaded`, getAdvice);
async function getAdvice() {
  const adviceData = await fetch("https://api.adviceslip.com/advice", {
    headers: { Accept: "application/json" },
  });
  const adviceObj = await adviceData.json();

  adviceId.textContent = `ADVICE #${adviceObj.slip.id}`;
  advice.textContent = adviceObj.slip.advice;
  console.log(adviceObj);
}
button.addEventListener("click", getAdvice);
