const { lerHTML, temTitulo, temCharset, temConteudo } = require("../src/validador");

let html;

beforeAll(() => {
  html = lerHTML();
});

describe("Validação do index.html", () => {
  test("o arquivo HTML não está vazio", () => {
    expect(temConteudo(html)).toBe(true);
  });

  test("a página tem um título <h1>", () => {
    expect(temTitulo(html)).toBe(true);
  });

  test("a página tem charset UTF-8", () => {
    expect(temCharset(html)).toBe(true);
  });

  test("a página contém a palavra Teste", () => {
    expect(html).toContain("Teste");
  });
});
