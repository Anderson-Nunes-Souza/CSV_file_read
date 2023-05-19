const readline = require("readline");
const fs = require("fs");
const { count } = require("console");

const readable = fs.createReadStream("arquivo.csv");

const dict = {
    "Name": null,
    "Endereco": null,
    "numeroRegistro": null
}

// var dict = new Map();
// dict.set("Nome", null);
// dict.set("Endereço", null);
// dict.set("Numero de registro", null);

const rl = readline.createInterface({
  input: readable,
});

let isFirstLine = true; // Variável de controle para verificar se é a primeira linha

rl.on("line", (line) => {
  if (isFirstLine) {
    isFirstLine = false;
    return; // Ignora a primeira linha
  }
  // Process each line here
  //console.log("Line:", line);
  dict.Name = line;
  console.log(dict.Name);
})