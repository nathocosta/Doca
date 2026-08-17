# Guia de Contribuição - Doca Frontend

Obrigado pelo seu interesse em contribuir para o frontend do **Doca**! Este guia ajuda você a iniciar sua contribuição de forma rápida e eficiente.

---

## 🚀 Como Começar

1. **Faça um Fork** deste repositório.
2. **Clone** o seu fork localmente:
   ```bash
   git clone https://github.com/SEU_USUARIO/Doca.git
   ```
3. **Crie uma Branch** para sua correção ou funcionalidade:
   ```bash
   git checkout -b feature/minha-melhoria
   ```

---

## 🛠️ Configuração Local

Como este projeto é construído puramente com tecnologias web estáticas, você não precisa de nenhum compilador complexo:

1. Abra o arquivo `index.html` em qualquer navegador da sua escolha para visualizar o site localmente.
2. Alternativamente, você pode usar uma extensão de servidor local (como Live Server do VSCode) para atualizar a página em tempo real.
3. Se quiser rodar com o backend local do Doca, certifique-se de que a API (`doca-api`) esteja rodando na porta `3000` do seu `localhost`.

---

## 📏 Estilo de Código

*   **HTML:** Mantenha a estrutura semântica e identação de 4 espaços.
*   **CSS:** Sempre que possível, utilize classes utilitárias do **Tailwind CSS**. Evite criar regras customizadas no `style.css` a menos que seja estritamente necessário.
*   **JavaScript:**
    *   Utilize constantes (`const`) e variáveis locais (`let`) em vez de `var`.
    *   Mantenha nomes de funções explicativos e em inglês ou português coerente.
    *   Comente rotinas complexas de manipulação de arquivos.

---

## 📥 Enviando sua Contribuição

1. Faça commit das suas alterações com mensagens claras:
   ```bash
   git commit -m "feat: adiciona nova funcionalidade X"
   ```
2. Faça o push para a sua branch:
   ```bash
   git push origin feature/minha-melhoria
   ```
3. Abra um **Pull Request** direcionado à branch `main` deste repositório original.
4. Preencha o template do PR explicando o que foi feito.

---

## 📜 Código de Conduta

Ao contribuir com este projeto, você concorda em seguir os termos descritos em nosso [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
