<div align="center">
    <img src="logo.png" height="80">
</div>
<p align="center">
    Obtenha o plural de palavras no singular em português brasileiro 🇧🇷
</p>

## Como usar

### NPM
1. Instale o pacote `pluralize-ptbr` com o NPM
```bash
$ npm install pluralize-ptbr
```

2. Importe o pacote no seu projeto

```javascript
const p = require("pluralize-ptbr");

function Pluralizar(palavras, condicao) {
    if (true == condicao) {
        return p(palavras)
    }
    return palavras
}

function ExibirAlerta(msgs) {
    const total = msgs.length
    
    if (total == 0) {
        return "Você não tem mensagem."
    }
    
    let obterPlural = total > 1 ? true : false
    let alertaLabel = `Você tem ${total} ${Pluralizar("nova mensagem", obterPlural)}`
    
    return alertaLabel
}

// ExibirAlerta([])
// -> "Você não tem mensagem."
//
// ExibirAlerta([1])
// -> "Você tem 1 nova mensagem."
//
// ExibirAlerta([1, 2, 3])
// -> "Você tem 3 novas mensagens."
```

### Manualmente
```html
<script src="https://raw.githubusercontent.com/k4fer74/pluralize-ptbr/master/dist/pluralize-words-ptbr.min.js"></script>

<script>
    console.log(plural("projétil mão"));
    // -> projéteis mãos
</script>
```
