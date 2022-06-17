class Auto {
  constructor(brand, yearOfIssue, enginePower, color) {
    this.brand = brand;
    this.yearOfIssue = yearOfIssue;
    this.enginePower = enginePower;
    this.color = color;
  }

  showInfo() {
    return `Марка машины ${this.brand} год выпуска 
    ${this.yearOfIssue} мощность двигателя ${this.enginePower}  цвет машины ${this.color}`;
  }
}

class ElectroCars {
  constructor(brand, yearOfIssue, enginePower, color, batteryVolume) {
    this.brand = brand;
    this.yearOfIssue = yearOfIssue;
    this.enginePower = enginePower;
    this.color = color;
    this.batteryVolume = batteryVolume;
  }

  showInfo() {
    return `Марка машины ${this.brand} год выпуска 
        ${this.yearOfIssue} мощность двигателя ${this.enginePower}  цвет машины ${this.color}
        ии мощность аккумулятора ${this.batteryVolume}`;
  }

  promote() {
    return "Покупайте экологичные машины, по приемлемой цене.";
  }
}

const toyota = new Auto("Camry70", 2020, "260ph", "black");
document.write(toyota.showInfo());

const tesla = new ElectroCars("Model X", 2021, "180hp", "gray", "140kv");
document.write(tesla.showInfo() + tesla.promote());
