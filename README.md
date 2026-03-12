# 🌐 Projeto Web com CI/CD

Página HTML simples com pipeline completo de **Integração e Entrega Contínua** usando GitHub Actions.

Toda vez que você mudar algo no código e fizer push, o site atualiza automaticamente!

---

## 📁 Estrutura do Projeto

```
projeto-web/
├── src/
│   ├── index.html        ← página que aparece na web
│   └── validador.js      ← funções de validação
├── tests/
│   └── validador.test.js ← testes automatizados (Jest)
├── .github/
│   └── workflows/
│       └── ci.yml        ← pipeline CI/CD completo
├── package.json
└── README.md
```

---

## ⚙️ Como o Pipeline Funciona

```
Você faz push no GitHub
        │
        ▼
🧪 JOB 1 - Testes
   └── Roda Jest para validar o HTML
        │
        ▼ (só se passar)
🏗️ JOB 2 - Build
   └── Copia src/ para dist/ e salva artefato
        │
        ▼ (só se passar)
🌐 JOB 3 - Deploy
   └── Publica no GitHub Pages automaticamente
        │
        ▼ (sempre)
🔔 JOB 4 - Notificação
   ├── ✅ Sucesso → log verde com URL do site
   └── ❌ Falha  → log vermelho com detalhes
```

---

## 🛠️ Como Usar

### 1. Clone o repositório
```bash
git clone https://github.com/SEU_USUARIO/projeto-web.git
cd projeto-web
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Rode os testes localmente
```bash
npm test
```

### 4. Ative o GitHub Pages
- Vá em **Settings > Pages**
- Em *Source*, selecione **GitHub Actions**

### 5. Faça push e veja o pipeline rodar!
```bash
git add .
git commit -m "minha mudança"
git push
```

Seu site estará em: `https://SEU_USUARIO.github.io/projeto-web`

---

## 🔔 Notificações por E-mail

Para receber e-mails automáticos quando o pipeline falhar:
- Vá em **GitHub > Settings > Notifications**
- Ative **GitHub Actions** em *Email*

---

## 🤝 Como Contribuir

1. Fork o projeto
2. Crie uma branch: `git checkout -b minha-feature`
3. Edite o `src/index.html` com sua mudança
4. Commit: `git commit -m "feat: minha mudança"`
5. Push: `git push origin minha-feature`
6. Abra um **Pull Request** — o pipeline roda automaticamente!

---

## 🧪 Experimente Mudar!

Abra `src/index.html` e troque o texto dentro do `<h1>`:

```html
<!-- Antes -->
<h1 id="titulo">Teste</h1>

<!-- Depois — mude para qualquer coisa! -->
<h1 id="titulo">Olá Mundo! 🚀</h1>
```

Faça commit, push, e veja o site atualizar em menos de 1 minuto!
