var listaCognomi=['Pesce', "Castenetto", "Passaro", "Grimaldi", "Rossi", "Verdi", "Bianchi"];
console.log(listaCognomi);
document.getElementById("ul").innerHTML=listaCognomi;

var cognome= prompt("qual'e' il tuo cognome?");
console.log(cognome);
document.getElementById("surname").innerHTML=cognome;

listaCognomi.push(cognome);
document.getElementById("ul_total").innerHTML=listaCognomi;

listaCognomi.sort();
console.log(listaCognomi);
document.getElementById("ol").innerHTML=listaCognomi;

for (var i = 0; i <= listaCognomi.length; i++) {
  if (listaCognomi[i] == cognome) {
    var posizione= i;
    console.log(i);
    document.getElementById("number_order").innerHTML= posizione + 1;
  }
}
