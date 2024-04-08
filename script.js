const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.querySelector(".result");
console.log(result);
const btn = document.querySelector(".searrch_btn");

btn.addEventListener("click", () => {
  const word = document.querySelector(".search_input").value;
  fetch(`${url}${word}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
});
