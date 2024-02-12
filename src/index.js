function displayTale(response) {
  console.log("Fairy tale generated");
  new Typewriter("#tale", {
    strings: response.data.answer,
    autoStart: true,
    delay: 15,
    cursor: "",
  });
}

function generateTale(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "49ecec9d222e3fb8o4502323fetf4ac1";
  let context =
    "You are a parent and have 2 children aged 3 and 5. Generate a sweet fairy tale, with positive message at the end, in English language, to be read before bedtime. Maximum length: 15 lines.";
  let prompt = `User instructions: Generate a sweet fairy tale for children, in English language, about ${instructionsInput.value}. Add also maximum 2 emojis per line, Break down into paragraphs.`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let taleElement = document.querySelector("#tale");
  taleElement.classList.remove("hidden");
  taleElement.innerHTML = `🪄 Generating a fairy tale for children about ${instructionsInput.value} ...`;

  console.log("Generating tale");
  console.log(`Prompt: ${prompt}`);
  console.log("Context: ${context}");
  axios.get(apiURL).then(displayTale);
}

let taleFormElement = document.querySelector("#tale-generator");
taleFormElement.addEventListener("submit", generateTale);
