# 📄 Doca - Frontend

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-success.svg)](https://nathocosta.github.io/Doca)

Interface web moderna, leve e intuitiva do **Doca** — uma ferramenta 100% segura para manipulação de PDFs em lote ou arquivos únicos.

---

## 🚀 Versão Hospedada
Acesse a versão de produção rodando no GitHub Pages:
**[https://nathocosta.github.io/Doca](https://nathocosta.github.io/Doca)**

---

## ✨ Funcionalidades
1. **Mesclar PDFs:** Junte múltiplos arquivos PDF em um único documento organizado.
2. **Dividir PDF:** Extraia páginas individuais ou intervalos específicos (Ex: 1-3, 5).
3. **Rotacionar Páginas:** Gire as páginas do seu PDF em 90°, 180° ou 270°.
4. **Imagem para PDF:** Converta imagens PNG, JPG e JPEG em um documento PDF consolidado.
5. **Compactar PDF:** Reduza o tamanho de arquivos PDF pesados preservando a qualidade.
6. **Word para PDF:** Converta seus arquivos do Microsoft Word (`.docx`) em PDF instantaneamente.
7. **Proteger PDF:** Criptografe seus arquivos PDF com senha usando criptografia AES-128.

---

## 🛠️ Tecnologias
*   **HTML5** (Semântico e responsivo)
*   **Tailwind CSS** (Utilizado via CDN customizada para estilização premium e suporte a Dark Mode)
*   **JavaScript (ES6+)** (Manipulação assíncrona de arquivos e consumo de APIs sem dependências pesadas)
*   **Material Symbols & Google Fonts** (Ícones e tipografia modernos)

---

## 🔧 Configuração da API
O frontend conecta-se dinamicamente ao backend configurado no arquivo `script.js`.
Por padrão, ele detecta se você está em ambiente local (`localhost`) ou em produção:
*   **Local:** `http://localhost:3000`
*   **Produção:** `https://doca-api.onrender.com` (Backend hospedado no Render)

---

## 📦 Deploy
Como o frontend é puramente estático (HTML/CSS/JS), o deploy é extremamente simples:

1. Faça o fork ou clone deste repositório:
   ```bash
   git clone https://github.com/nathocosta/Doca.git
   ```
2. Habilite o **GitHub Pages** nas configurações do repositório no GitHub (`Settings` > `Pages`).
3. Selecione a branch `main` e a pasta `/` (root) como fonte do deploy.
4. O GitHub gerará o link da página em instantes.

---

## 🤝 Como Contribuir
Adoramos contribuições! Se você quiser ajudar a melhorar o Doca:
1. Veja o arquivo [CONTRIBUTING.md](CONTRIBUTING.md) para entender as diretrizes.
2. Abra uma issue para discutir novas ideias ou relatar bugs.
3. Envie um Pull Request com suas melhorias.

---

## 📜 Licença
Distribuído sob a licença **AGPL-3.0** (GNU Affero General Public License v3). Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
