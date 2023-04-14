// Using interfaces

interface Employee {
  name: string;
  age: number;
  entering: Date;

  timeInHouse(): string;
}

let employee1: Employee;

employee1 = {
  name: 'Victor',
  age: 26,
  entering: new Date('2021-05-05'),

  timeInHouse() {
    const dayInMilisec = 86400000;
    const today = new Date().getTime();
    const timeInHouse = today - this.entering.getTime();
    const timeInSeconds = Math.abs(Math.floor(timeInHouse / 1000));
    let timeText = '';
    switch (true) {
      case timeInSeconds < 60:
        timeText = `${timeInSeconds} segundos`;
        break;
      case timeInSeconds < 3600:
        const timeInMinutes = Math.floor(timeInSeconds / 60);
        timeText = `${timeInMinutes} ${
          timeInMinutes === 1 ? 'minuto' : 'minutos'
        }`;
        break;
      case timeInSeconds < dayInMilisec / 1000:
        const timeInHours = Math.floor(timeInSeconds / 3600);
        timeText = `${timeInHours} ${timeInHours === 1 ? 'hora' : 'horas'}`;
        break;
      case timeInSeconds > dayInMilisec / 1000 && timeInSeconds < 2592000:
        const timeInDays = Math.floor(timeInSeconds / (dayInMilisec / 1000));
        timeText = `${timeInDays} ${timeInDays === 1 ? 'dia' : 'dias'}`;
        break;
      case timeInSeconds > 2592000:
        const timeInMonth = Math.floor(
          Math.floor(timeInSeconds / (dayInMilisec / 1000)) / 30
        );
        timeText = `${timeInMonth} ${timeInMonth === 1 ? 'mês' : 'meses'}`;
        break;
    }
    return `O funcionário ${this.name} está na empresa há ${timeText}.`;
  },
};

console.log(employee1.timeInHouse());
