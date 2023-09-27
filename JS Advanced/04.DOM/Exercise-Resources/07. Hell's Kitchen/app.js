function solve() {

  document.querySelector("#btnSend").addEventListener("click", onClick);

  const inputValue = document.querySelector("#inputs>textarea");
  const bestRestaurantResult = document.querySelector("#bestRestaurant>p");
  const workersResult = document.querySelector("#workers>p");

  function onClick() {

    const arr = JSON.parse(inputValue.value);
    let restaurants = restaurantsPick(arr)
    let bestRestaurant = bestRestaurants(restaurants);
    bestResults(bestRestaurant)
    
    function restaurantsPick(arr) {
      let restaurants = {};
      arr.forEach((element) => {
        const [name, workers] = element.split(" - ");
        const workerColections = workers.split(", ");
        let workerOutput = [];
        for (const worker of workerColections) {
          let [workerName, salary] = worker.split(" ");
          salary = Number(salary);
          workerOutput.push({ name: workerName, salary });
        }
        if (restaurants[name]) {
         workerOutput = workerOutput.concat(restaurants[name].workers);
        }
  
        workerOutput.sort((w1, w2) => w2.salary - w1.salary);
        const bestSalary = workerOutput[0].salary;
        const totalSalary = workerOutput.reduce(
          (sum, w) => sum + w.salary,
          0
        );
        const avgSalary = totalSalary / workerOutput.length;
        restaurants[name] = {
          workers: workerOutput,
          avgSalary: avgSalary,
          bestSalary,
        };
      });
       return restaurants;
    }
   function bestRestaurants(restaurants) {
    let bestRestaurantSalary = 0;
    let bestRestaurant = undefined;

    for (const name in restaurants) {
      const currentRestaurant = restaurants[name];
      if (currentRestaurant.avgSalary > bestRestaurantSalary) {
        bestRestaurant = {
          name,
          workers: currentRestaurant.workers,
          bestSalary: currentRestaurant.bestSalary,
          avgSalary: currentRestaurant.avgSalary,
        };
        bestRestaurantSalary = currentRestaurant.avgSalary;
      }
    }
     return bestRestaurant;
   }
   function bestResults(bestRestaurant) {
    bestRestaurantResult.textContent = `Name: ${
      bestRestaurant.name
    } Average Salary: ${bestRestaurant.avgSalary.toFixed(
      2
    )} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;
    const result = [];

    bestRestaurant.workers.forEach((worker) => {
      result.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
    });
    workersResult.textContent = result.join(" ");
   }


  
  }
}
