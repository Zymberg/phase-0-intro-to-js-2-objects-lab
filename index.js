// Write your solution in this file!
let employee = {
    name: "Joe",
    streetAddress: "123 Broadway"
}

function updateEmployeeWithKeyAndValue(obj, key, value){
   const newObj = { ...obj }

   newObj[key] = value;

   return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
   employee.name = 'Sam';
   employee.streetAddress = '12 Broadway'
   return employee;
}


function deleteFromEmployeeByKey(employee, key, value){
  const newEmployee = {...employee}
  newEmployee[key] = value
    return newEmployee;
}

let newEmployee = deleteFromEmployeeByKey(employee, 'name')

function destructivelyDeleteFromEmployeeByKey(employee, key){
  delete employee.name
  return employee
}
