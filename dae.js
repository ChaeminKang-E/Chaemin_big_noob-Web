const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return "Marathon";
  } else if (random === 1) {
    return "Triathlon";
  } else if (random === 2) {
    return "Pentathlon";
  }
};
const events = getRandEvent();

let days
const getTrainingDays = (event) => {
  if (event === "Marathon") {
    days = 50;
  } else if (event === "Triathlon") {
    days = 100;
  } else if (event === "Pentathlon") {
    days = 200;
  }

  return days;
};
days = getTrainingDays(events);

const name="Nala"
const logEvent = (event) => {
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

logEvent(events);
logTime(days);