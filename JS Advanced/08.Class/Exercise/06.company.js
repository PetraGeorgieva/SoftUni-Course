class Company {
    constructor(){
        this.department = [];
    }


   getDepart(name){
   const depart = this.department.find((x)=> x.name === name);
   if(!depart){
    const temp = {name,employee:[],salary:[],position: []};
    this.department.push(temp);
    return temp
   }
   return depart
   }
   getSalarySum(depart){
    return depart.salary.reduce((a,v)=> a+ v,0);
   }
   bestSalaryDepart(){
    return this.department.sort(
        (a,b)=> 
    this.getSalarySum(b)/ b.salary.length -
    this.getSalarySum(a)/a.salary.length
    )[0];
   }

  addEmployee(name,salaries,positions,departments){
    
    if(name === '' || salaries === '' || positions === ''|| departments === ''){
        throw new Error("Invalid input!");
    }
    if(name === undefined || salaries === undefined || positions === undefined|| departments === undefined){
        throw new Error("Invalid input!");
    }
    if(name === null || salaries === null || positions === null|| departments === null){
        throw new Error("Invalid input!");
    }
   
    if(Number(salaries) < 0){
        throw new Error("Invalid input!");
    }
    const department = this.getDepart(departments)
     department.employee.push(name)
     department.salary.push(salaries)
     department.position.push(positions)
    return `New employee is hired. Name: ${name}. Position: ${positions}`
   }

    bestDepartment(){
   const  best = this.bestSalaryDepart();
  const combinedEmployees =  best.employee.reduce((a,v,i) => {
    a[i] = [];
    a[i].push(v,best.salary[i], best.position[i]);
    return a;
   },[]);
   
   const sorted = combinedEmployees.sort((a,b)=> {
    return b[1]-a[1] === 0? a[0].localeCompare(b[0]) : b[1] - a[1];
   })
   const prindData = sorted.map(x=> x.join(' ')).join("\n")
   const salaryAvrg = (this.getSalarySum(best)/ best.salary.length).toFixed(2)
   
   return `Best Department is: ${best.name}
Average salary: ${salaryAvrg}
${prindData}`;
    }

}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
