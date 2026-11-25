// Tehtävä 1: Lämpötilamuunnin
const celsiusFahrenheitiksi = (c) => c * 9 / 5 + 32;
console.log(celsiusFahrenheitiksi(-20.0));
// Sama arvolle 25, paljonko tuli?

// Tehtävä 2: Arvosana
// Voisiko olla esim. näin?
const arvosana = (pisteet) => {
    if(pisteet<50)
    return 0;
};
// Testataan arvosana-funktiota arvolla 49
// Kokeile miten saat if elset muille arvosanoille
console.log((arvosana(49)));

/*
// Tehtävä 3: Tervehdys oletusarvolla
function tervehdi(nimi, kieli = "fi") {
  if (kieli === "en") {
    return `Hello, ${nimi}!`;
  } else if (kieli === "sv") {
    return `Hej, ${nimi}!`;
  } else {
    return `Hei, ${nimi}!`;
  }
}
console.log(tervehdi("Aino"));        // Hei, Aino!
console.log(tervehdi("Aino", "en"));  // Hello, Aino!
console.log(tervehdi("Aino", "sv"));  // Hej, Aino!
console.log(tervehdi("Aino", "de"));  // Hei, Aino!
*/

// Tehtävä 3 html lang -arvon mukaan

const tervehdykset = {
  fi: "Hei",
  en: "Hello",
  sv: "Hej",
};


const tervehdi = (nimi, kieli = document.documentElement.lang) => {
  const koodi = kieli.slice(0, 2).toLowerCase();
  const sana = tervehdykset[koodi] ?? tervehdykset.fi;
  return `${sana}, ${nimi}!`;
};

console.log(tervehdi("Aino"));        // käyttää sivun lang-arvoa