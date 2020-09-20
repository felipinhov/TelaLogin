function logando() {
    let login = window.document.getElementById('login').value
    let senha = window.document.getElementById('senha').value
    let nasc = window.document.getElementById('nasci').value
    window.confirm(`Olá, ${login}! Sua senha é: ${senha}. Gostaria de altera-lá ? 
Aperte "OK" caso sua resposta seja sim. Sua data de nascimento é: ${nasc}!`)
}