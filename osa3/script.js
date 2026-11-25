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