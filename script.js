const shirt = Number(prompt("Zadejte počet kupovaných triček"))
let cena = 300
if (shirt <= 49) {
    cena = 300
}
else if (shirt <= 200) {
    cena = 250
}
else if (shirt <= 500) {
    cena = 200
}
else if (shirt <= 1000) {
    cena = 150
}
else {
    cena = 120
}
document.body.innerHTML += `
<h1>Zvolený počet: ${shirt}</h1>
<p>Cena jednoho trička: ${cena} Kč </p>
<p>Cena celkem: ${shirt*cena} Kč </p>
`