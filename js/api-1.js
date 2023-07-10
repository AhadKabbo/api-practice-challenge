console.log("hello");
const person = {
  found: 2,
  message: "Found 2 persons",
  result: [
    {
      name: {
        common: "John",
        fullName: ["John", "Doe"],
      },
      age: 32,
      isMale: false,
      address: {
        street: "13/A St Joseph",
        house: 10,
      },
    },
    {
      name: {
        common: "Humayoun",
        fullName: ["Humayoun", "Kabir"],
      },
      age: 33,
      isMale: false,
      address: {
        street: "13/A St Lucia",
        house: 11,
      },
    },
  ],
};

const displayMassage = () => {
  const massage = document.getElementById("massage");
  massage.innerHTML = person.message;
  console.log(person);
};

const displayPerson = () => {
  const personCard = document.getElementById("personCard");
  const personDiv = document.createElement("div");
  //   person-card.classList.add('country');
  personDiv.innerHTML = `
<h2>Person Name: ${person.result[0].name.common}</h2>
<h2>age: ${person.result[0].name.common}</h2>
<h2>street: ${person.result[0].name.common}</h2>
`;

  personCard.appendChild(personDiv);
};

displayMassage();
displayPerson();
