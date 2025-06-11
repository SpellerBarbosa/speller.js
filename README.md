# 🔖 `<label-input>` – Web Component

Um **Web Component** simples que encapsula um `<label>` com `<input>` e suporte opcional para validação numérica com vírgula.  
Sem estilos acoplados – cada dev estiliza do seu jeito.

---

## 🚀 Como usar

### 1. Importe o componente:

```html
<script type="module" src="./src/components/spLabelInput.js" defer></script>
```

### 2. Use no HTML:

```html
<label-input
  sp-name="preco"
  sp-label="Preço"
  sp-place="Digite o valor"
  sp-numeric
></label-input>
```

---

## 🧩 Atributos disponíveis

| Atributo      | Tipo     | Obrigatório | Descrição                                                                 |
|---------------|----------|-------------|---------------------------------------------------------------------------|
| `sp-name`     | string   | ✅ Sim       | Define o atributo `name` do input.                                       |
| `sp-label`    | string   | ✅ Sim       | Texto exibido como label acima do input.                                 |
| `sp-place`    | string   | ❌ Não       | Define o `placeholder` do campo.                                         |
| `sp-type`     | string   | ❌ Não       | Tipo do input (`text`, `email`, etc). Padrão: `"text"`.                  |
| `sp-numeric`  | boolean  | ❌ Não       | Se presente, o campo aceita somente valores numéricos com vírgula.       |

---

## 📦 API

### Acessar o valor

```js
const input = document.querySelector('label-input');
console.log(input.value); // string ou number
```

### Atribuir valor

```js
input.value = 19.99; // será exibido como "19,99" se for numérico
```

---

## ⚠️ Validação numérica

Se `sp-numeric` estiver presente:

- Letras e caracteres inválidos não são aceitos.
- Um alerta visual é exibido.
- No console: `Esse campo só aceita números`.
- `input.value` retorna `0` em caso de valor inválido.

---

## 🧪 Evento `input`

O componente despacha o evento `input` a cada digitação:

```js
input.addEventListener('input', () => {
  console.log('Valor atualizado:', input.value);
});
```

---

## 💡 Exemplo completo

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Exemplo</title>
    <script type="module" src="./src/components/spLabelInput.js" defer></script>
  </head>
  <body>
    <label-input
      sp-name="preco"
      sp-label="Preço"
      sp-place="Digite o valor"
      sp-numeric
    ></label-input>

    <script>
      const precoInput = document.querySelector('label-input');
      precoInput.addEventListener('input', () => {
        console.log('Valor atual:', precoInput.value);
      });
    </script>
  </body>
</html>
```

---

## 🎨 Estilo

Nenhum estilo é aplicado por padrão.  
Você pode estilizar com CSS externo conforme sua identidade visual:

```css
label {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

input {
  padding: 6px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

p {
  color: red;
  font-size: 0.875rem;
}
```

---

## 📄 Licença

MIT © [Fernando Barbosa/Speller](https://github.com/SpellerBarbosa)
