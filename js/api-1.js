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
};

const displayPerson = () => {
  const personCard = document.getElementById("personCard");

  person.result.forEach((personInfo) => {
    const personDiv = document.createElement("div");
    personDiv.classList.add("personInfoStyle");
    personDiv.innerHTML = `
        <h2 class="personName">Person Name: ${personInfo.name.common}</h2>
        <h2 class="personAge">Age: ${personInfo.age}</h2>
        <h2 class="personStreet">Street: ${personInfo.address.street}</h2>
      `;
    personCard.appendChild(personDiv);
  });
};

displayMassage();
displayPerson();
