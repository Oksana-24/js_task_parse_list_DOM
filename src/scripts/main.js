'use strict';

const liElements = [...document.querySelectorAll('li')];
const list = document.querySelector('ul');

const employes = liElements.map((li) => ({
  name: li.innerText,
  position: li.dataset.position,
  salary: convertToNumber(li.dataset.salary),
  age: li.dataset.age,
}));

function convertToNumber(value) {
  const number = parseFloat(value.slice(1));

  return number;
}

function sortList(people) {
  const sortedEmployes = people.sort((a, b) => b.salary - a.salary);

  return sortedEmployes;
}

function getEmployees(people) {
  list.innerHTML = '';

  people.forEach((person) => {
    const li = document.createElement('li');

    li.innerText = person.name;
    li.dataset.position = person.position;
    li.dataset.salary = `$${person.salary}`;
    li.dataset.age = person.age;

    list.append(li);
  });
}

const sorted = sortList(employes);

getEmployees(sorted);
