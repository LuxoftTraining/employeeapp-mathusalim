const emploeeMap = new Map();

function findByName(name, surname) {
  return EMPLOEES.filter(
    (employee) =>
      (!name || employee.name === name) &&
      (!surname || employee.surname === surname)
  );
}

function addEmployee(name, surname) {
  if (!name || name.length == 0 || !surname || surname.length == 0) {
    throw new Error("name and surname should be not empty");
  }
  let max = 0;
  for (let emploee of EMPLOEES) {
    if (emploee.id > max) max = emploee.id;
  }
  let id = max + 1;
  EMPLOEES.push({ id, name, surname });
  return id;
}

function removeEmploee(id) {
  EMPLOEES = EMPLOEES.filter((emploee) => emploee.id !== id);
}

function showEmploee(emploee) {
  console.log(`showing emploee ${emploee["name"]} info:`);
  for (let prop in emploee) {
    console.log(`${prop}: ${emploee[prop]}`);
  }
}

function showEmploees() {
  for (let emploee of EMPLOEES) {
    showEmploee(emploee);
  }
}

function findById(id) {
  const cachedResult = emploeeMap.has(id) && emploeeMap.get(id);
  const result =
    cachedResult ||
    EMPLOEES.find((emploee) => emploee.id === id) ||
    (() => {
      throw Error(`employy with id: ${id} doesn't exist`);
    })();
  !cachedResult && emploeeMap.set(id, result);
  return result;
}

function addPhone(id, phone) {
  const emploee = findById(id);
  emploee.phones = emploee.phones ? [...emploee.phones, phone] : [phone];
}

function setDateOfBirth(id, date) {
  findById(id).dateOfBirth = date;
}

function getEmploeeAge(id) {
  const employee = findById(id).dateOfBirth;
  const ageDiff = Date.now() - employee.dateOfBirth?.getTime();
  const ageDate = new Date(ageDiff);
  return Math.abs(ageDate - 1970);
}

function formatDate(date) {
  let day = date.getDate();
  if (day < 10) day = "0" + day;
  let month = date.getMonth() + 1;
  if (month < 10) month = "0" + month;
  let year = date.getFullYear();

  return day + "." + month + "." + year;
}

function getEmployeeInfo(id) {
  const emploee = findById(id);

  const phones = emploee.phones ? `List of phones: ${emploee.phones}` : "";
  const age = emploee.dateOfBirth ? `Age: ${getEmploeeAge(emploee.id)}` : "";
  return `  
     Name: ${emploee.name} 
     Surname: ${emploee.surname} 
     Date of birth: ${formatDate(emploee.dateOfBirth)} 
     ${phones}  
     ${age} 
    `;
}

function testEmployee() {
  addPhone(1, "555-55-55");
  addPhone(1, "666-66-66");
  setDateOfBirth(1, new Date(2000, 1, 1));
  const info = getEmployeeInfo(1);
  console.log(info);
}

function getEmployeeJSON(id) {
  const e = findById(id);
  return JSON.stringify(e);
}
