const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};
console.log(returnFirstTwoDrivers(["Sally", "Bob", "Freddy", "Claudia"]));

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};
console.log(returnLastTwoDrivers(["Sally", "Bob", "Freddy", "Claudia"]));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers);

const createFareMultiplier = function (multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
};
const fareDoubler = createFareMultiplier(2);
console.log(fareDoubler(5));

const fareTripler = createFareMultiplier(3);
console.log(fareTripler(5));

const receivesAFunction = function (callback) {
  callback();
};

const returnsANamedFunction = function () {
  return function namedFunction() {
    console.log("This is a named function");
  };
};

const returnsAnAnonymousFunction = function () {
  return function () {
    console.log("This is an anonymous function");
  };
};
