class Restaurant {
  constructor(name, cusineTipe) {
    this.name = name;
    this.cusineTipe = cusineTipe;
    this.served = 0;
  }

  showInfo() {
    return `${this.name} is a restaurant of ${this.cusineTipe} meal.`;
  }

  isOpen() {
    let currentHour = new Date().getHours();
    let currentDay = new Date().getDay();

    if (currentDay === 6 || currentDay === 0) {
      return `${this.name} is closed`;
    } else {
      if (currentHour > 9 && currentHour < 22) {
        return `${this.name} is open`;
      } else {
        return `${this.name} is closed`;
      }
    }
  }
  serve() {
    return (this.served = this.served + 1);
  }
  setServed(amount) {
    return (this.served = this.served + amount);
  }
  toShowTotalServed() {
    return `Обслужена ${this.served}`;
  }
}

const beskan = new Restaurant("Beskan", "Europa");

document.write(beskan.showInfo());
document.write(beskan.isOpen());
document.write(beskan.toShowTotalServed());
