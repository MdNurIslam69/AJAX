// function loadData() {
//   const xhttp = new XMLHttpRequest();

//   xhttp.onload = function () {
//     let container = document.getElementById("demo");
//     container.innerHTML = this.responseText;

//     const testHeader = xhttp.getResponseHeader("date");
//     console.log(testHeader);
//   };

//   //   GET, POST, PUT, DELETE
//   xhttp.open("GET", "ajax_info.txt", true);

//   xhttp.send();
// }
//
//
//
//
//
//
// part--1// modern way

function loadFetchUsers() {
  fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => response.json())
    .then((data) => {
      const usersList = document.getElementById("usersList");
      usersList.innerHTML = "";

      data.forEach((user) => {
        console.log();
        usersList.innerHTML += `<li>${user.username}</li>`;
      });
    })
    .catch((error) => console.log(error));
}

//
//
//
//
//
// part--1// old way

// API call using (AJAX) XML---- old way
function loadXMLUsers() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      const posts = JSON.parse(xhr.response);
      const usersList = document.getElementById("usersList");
      usersList.innerHTML = "";

      posts.forEach((post) => {
        console.log(post.username);
        usersList.innerHTML += `<li>${post.name}</li>`;
      });
    }
  };

  xhr.send();
}
