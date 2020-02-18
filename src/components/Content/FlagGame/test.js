let list = [{id: 0, UA: "Україна", EN: "Ukraine", path: "../../../images/flags/Ukraine.svg.png"}];
let countries = ["Україна"];

let id = countries.length;

function addCountry (UA, EN) {
    list.push({id: countries.length, UA: UA, EN: EN, path: `../../../images/flags/${EN}.svg.png`});
    countries.push(UA);
}
addCountry("Росія", "Rusia");
addCountry("Англія", "England");

let i = (Math.floor(Math.random() * countries.length));
console.log(list);




