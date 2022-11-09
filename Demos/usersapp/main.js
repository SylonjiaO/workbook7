// let promise = fetch("https://jsonplaceholder.typicode.com/users/5");

// let secondPromise = promise.then(function (response) {
//   console.log(response);
//   return response.json();
//   // return JSON.parse(response.body);
// });

// secondPromise.then(function (data) {
//   console.log(data);
// });

// fetch("https://jsonplaceholder.typicode.com/users/5")
//   .then(function (response) {
//     console.log(response);
//     return response.json();
//     // return JSON.parse(response.body);
//   })
//   .then(function (data) {
//     console.log(data);
//   });

function logResponse(response) {
    console.log(response); //log response
    return response.json(); //parse the body into js object
    //   return JSON.parse(response.body);
  }
  
  function logDataInBody(data) {
    console.log(data);
  }
  
  // fetch("https://jsonplaceholder.typicode.com/users/5")
  //   .then(logResponse)
  //   .then(logDataInBody);
  
  const personNumberInput = document.querySelector("#personNumberInput");
  
  function getPerson() {
    const userId = personNumberInput.value;
  
    document.querySelector("#personDiv h3").innerText = "Loading...";
    document.querySelector("#personDiv p").innerText = " ";
  
    fetch("https://jsonplaceholder.typicode.com/users/" + userId)
      .then((response) => {
        let dataWrappedInPromise = response.json();
        console.log(dataWrappedInPromise);
        return dataWrappedInPromise;
      })
      .then((person) => {
        if (person) {
          document.querySelector("#personDiv h3").innerText = person.name;
          document.querySelector("#personDiv p").innerText = person.phone;
        }
  
        console.log(person);
      });
  }
  
  window.onload = () => {
    getPerson();
    const getPersonButton = document.getElementById("getPersonButton");
    getPersonButton.onclick = getPerson;
    personNumberInput.onchange = getPerson;
  };
  
  //DEBUG EXAMPLE
  // fetch("https://jsonplaceholder.typicode.com/users/5")
  //   .then((response) => {
  //     let dataWrappedInPromise = response.json();
  //     console.log(dataWrappedInPromise);
  //     return dataWrappedInPromise;
  //   })
  //   .then((data) => {
  //     document.getElementById("preformattedBlock").innerText = JSON.stringify(
  //       data,
  //       null,
  //       1
  //     );
  //     console.log(data);
  //   });