/**
 Funções de validação da página.
 */

const fs = require("fs");
const path = require("path");

function lerHTML() {
  const filePath = path.join(__dirname, "../src/index.html");
  return fs.readFileSync(filePath, "utf-8");
}

function temTitulo(html) {
  return html.includes("<h1");
}

function temCharset(html) {
  return html.includes('charset="UTF-8"');
}

function temConteudo(html) {
  return html.trim().length > 0;
}

module.exports = { lerHTML, temTitulo, temCharset, temConteudo };
