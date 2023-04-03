function centuriesToMinutes (centuries) {
   let inYears = centuries * 100;
   let inDays = Math.trunc(inYears * 365.2422);
   let inHours = inDays * 24;
   let inMinutes = inHours * 60
   console.log(`${centuries} centuries = ${inYears} years = ${inDays} days = ${inHours} hours = ${inMinutes} minutes`)
}
centuriesToMinutes(5)