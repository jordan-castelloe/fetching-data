// Back to the coffee shop example! Let's say I'm keeping track of which employeek knows how to make which drink.

// Say an employee learns a new drink and we added it to their `knownDrinks` array

// So their original object looked something like this:
const ryan = {
  name: "Ryan",
  startDate: "1/10/18",
  jobTitle: "Barista",
  payRate: "$7.25/ hour",
  knownDrinks: ["latte", "mocha", "mocha latte", "Cold brew"],
  learnNewDrink: function (newDrinkParam) {
    this.knownDrinks.push(newDrinkParam);
  }
}

// Let's say that our application allows users to click a button to designate that they've learned a new drink. Ryan just learned to make an Americano! He clicks the button, and that fires something like this in our code:
ryan.learnNewDrink("americano");

// What happens if he refreshes the page? Or comes back tomorrow?? AAAhh!!

// Enter persistant storage!

// ---------------------------------------------------------------------------- //


// Fetching our data

fetch("http://localhost:8088/food")
  .then(foods => foods.json())
  .then(parsedFoods => {
    console.log(parsedFoods)
  })