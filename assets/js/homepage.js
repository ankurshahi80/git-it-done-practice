let userFormEl = document.querySelector("#user-form");
let nameInputEl = document.querySelector("#username");

const formSubmitHandler = function(event){
  event.preventDefault();
  // get value from input element
  let username = nameInputEl.value.trim();
  if(username) {
    getUserRepos(username);
    nameInputEl.value="";
  } else {
    alert("Please enter a Github username");
  }
};

const getUserRepos = function (user) {
  // format the github api url
  let apiUrl = "https://api.github.com/users/" + user + "/repos";

  // make a request to the url
  fetch(apiUrl).then(function(response){
    response.json().then(function(data){
      console.log(data);
    });
  });
};

userFormEl.addEventListener("submit", formSubmitHandler);