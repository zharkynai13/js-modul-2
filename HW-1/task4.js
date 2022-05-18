let souvenirWeight = 75;
let baubleWeight = 112;

let howManySouvenir = Number(prompt("How many souvenirs did you buy", ""));
let howManyBauble = Number(prompt("How many bauble did you buy", ""));

alert(
  "Total Weight: " +
    (howManySouvenir * souvenirWeight + howManyBauble * baubleWeight)
);