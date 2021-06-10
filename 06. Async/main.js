// Async - Start now, finish later

// ### AJAX - Old Way
const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("could not fetch data", undefined);
    }
  });

  request.open("GET", resource);
  request.send();
};

// Callback Hell
getTodos("todos/todo.json", (err, data) => {
  console.log(data);
  getTodos("todos/blade.json", (err, data) => {
    console.log(data);
  });
});

const getSomething = () => {
  return new Promise((resolve, reject) => {
    // fetch something
    resolve("some data");
    // reject("some error");
  });
};

getSomething().then(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log(err);
  }
);

// OR

getSomething()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// ### Better Way - Still Old
const getTodosTwo = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("error getting resource");
      }
    });

    request.open("GET", resource);
    request.send();
  });
};

// Chaining Promises - Resolves Callback hell
getTodosTwo("todos/todo.json")
  .then((data) => {
    console.log("Promise 1 resolved:", data);
    return getTodosTwo("todos/blade.json");
  })
  .then((data) => {
    console.log("Promise 2 resolved:", data);
  })
  .catch((err) => {
    console.log("Promise rejected:", err);
  });

// ### AJAX - New Way
function fetchTodosTwo() {
  const xhr = new XMLHttpRequest();

  // OPEN - type, url/file, async
  xhr.open("GET", "todos/todo.json", true);
  xhr.onload = function () {
    if (this.status == 200) {
      console.log(this.responseText);
    }
  };

  // Sends request
  xhr.send();
}

fetchTodosTwo();

// ### Fetch API
// Shaun Way
fetch("todos/todo.json")
  .then((res) => {
    console.log("Resolved", res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("Rejected", err);
  });

// Brad Way
fetch("todos/todo.json")
  .then((res) =>
    res.json().then((data) => {
      console.log(data);
    })
  )
  .catch((err) => {
    console.log(err);
  });

// ### Async & Await
const getTodosThree = async () => {
  const response = await fetch("todos/todo.json");
  if (response.status !== 200) {
    throw new Error("cannot fecth the data");
  }
  const data = await response.json();
  return data;
};

getTodosThree()
  .then((data) => console.log("Resolved:", data))
  .catch((err) => console.log("Rejected:", err.message));

// ### Async / Await / Fetch
async function fetchTodos() {
  const res = await fetch("todos/todo.json");
  const data = await res.json();
  console.log(data);
}

fetchTodos();

// ### Fetching onto the DOM
// ### Using AJAX

// Steps:
// #1: Create xhr variable
// #2: Onload functin added to xhr
// #3: Check Status and output data inside status
// #4: Send data outsie status

const btnOne = document.querySelector(".btn-1");

btnOne.addEventListener("click", getAjax);

function getAjax() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "todos/todo.json", true);
  xhr.onload = function () {
    if (this.status == 200) {
      const families = JSON.parse(this.responseText);

      let output = "";
      for (let family of families) {
        output += `<ul> 
                    <li>${family.name}</li>
                    <li>${family.age}</li>
                    <li>${family.status}</li>
                  <ul>`;
      }
      document.querySelector(".result").innerHTML = output;
    }
  };

  // Send Data
  xhr.send();
}

// ### Using FETCH

// Steps:
// fetch
// .then - res
// .then - data {Output}

const btnTwo = document.querySelector(".btn-2");

btnTwo.addEventListener("click", useFetch);
function useFetch() {
  fetch("todos/blade.json")
    .then((res) => res.json())
    .then((data) => {
      let output = "";
      data.forEach((family) => {
        output += `<ul>
                    <li>${family.name}</li>
                    <li>${family.age}</li>
                    <li>${family.status}</li>
                  <ul>`;
      });
      document.querySelector(".result-two").innerHTML = output;
    });
}
