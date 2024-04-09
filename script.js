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
      document.querySelector(".word").textContent = word;
      document.querySelector(
        ".first_leteral"
      ).innerHTML = `<p class="somthing1">${data[0].meanings[0].partOfSpeech}</p>
      
      <p class="somthing2">${data[0].phonetic}</p>
            `;
      document.querySelector(".meaning").innerHTML = ` <p class="meaning">
      ${data[0].meanings[0].definitions[0].definition}
    </p>`;

      document.querySelector(".example").innerHTML = ` <p class="example">
           ${data[0].meanings[0].definitions[0].example || ""}
      </p>`;
    });
});
