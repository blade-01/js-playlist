//### When looping through using getElementsByClassName
// const listItems = document.getElementsByClassName("list-item");

// Array.from(listItems).forEach((list) => {
//   console.log(list);
// });

// OR

// for (i = 0; i < listItems.length; i++) {
//   console.log(listItems);
// }

//### When looping using querySelectorAll
// const listItems = document.querySelectorAll(".list-item");

// listItems.forEach((list) => {
//   console.log(list);
// });

//### Nodes
// const addForm = document.querySelector("#add-form");

// console.log("node Type", addForm.nodeType);
// console.log("node type", addForm.nodeType);
// console.log("node Child Nodes", addForm.hasChildNodes());

// const clonedNodes = addForm.cloneNode(true);

// console.log(clonedNodes);

//###  Traversing the DOM
// parentElement;
// previousElementSibling;
// nextElementSibling;
// firstElementChild;
// lastElementChild;
// children

// Starting Point

//### Not so efficient
// const delBtn = document.querySelectorAll(".list-item .delete");

// delBtn.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const li = e.target.parentElement;
//     li.parentElement.removeChild(li);
//   });
// });

//### More Efficient

//### Delete Item
// Shaun Way
const list = document.querySelector("ul");

list.addEventListener("click", (e) => {
  if (e.target.className == "delete") {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

// OR

// Brad Way
// list.addEventListener("click", (e) => {
//   if (e.target.classList.contains("delete")) {
//     const li = e.target.parentElement;
//     list.removeChild(li);
//   }
// });

//### Forms
// Shaun Way
// const addForm = document.forms["add-form"];

// OR

// Brad Way
const addForm = document.querySelector("#add-form");

addForm.addEventListener("submit", addToItem);

function addToItem(e) {
  e.preventDefault();
  // Shaun Way
  // const inputValue = addForm.querySelector('input[type="text"]').value;

  // OR

  // Brad Way
  const inputValue = document.querySelector(
    "#add-form input[type='text']"
  ).value;

  // Validate
  if (inputValue == "") {
    showAlert("Please fill in the field", "danger");
  } else {
    // Create elements
    const li = document.createElement("li");
    const listName = document.createElement("span");
    const listBtn = document.createElement("span");

    // Set Attribute
    listBtn.setAttribute("class", "delete");
    listName.setAttribute("class", "name");
    li.setAttribute("class", "list-item");

    // Append to document
    li.appendChild(listName);
    li.appendChild(listBtn);
    list.appendChild(li);

    // Add content
    // Shaun Way
    // listBtn.textContent = "delete";
    // listName.textContent = inputValue;

    // Brad Way
    listName.appendChild(document.createTextNode(inputValue));
    listBtn.appendChild(document.createTextNode("delete"));

    // innerText pays attention to the styling while textContent does'nt

    // Clear Form
    document.querySelector("#add-form input[type='text']").value = "";
    showAlert("Item Added", "success");
  }
}

function showAlert(message, className) {
  const alertDiv = document.createElement("div");
  alertDiv.setAttribute("class", `alert-${className}`);
  alertDiv.appendChild(document.createTextNode(message));
  const container = document.querySelector(".container");
  const searchForm = document.querySelector("#search-form");
  container.insertBefore(alertDiv, searchForm);
  // Timeout
  setTimeout(() => {
    document.querySelector(`.alert-${className}`).remove();
  }, 3000);
}

//### Checkbox Events
const hideItems = document.querySelector("#hide");
hideItems.addEventListener("change", () => {
  if (hideItems.checked) {
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
});

//### Search Filter
// Shaun Way
// const filterList = document.forms["search-form"].querySelector("input");

// OR

// Brad Way
const filterList = document.querySelector("#search-form input");

filterList.addEventListener("keyup", filterForm);

function filterForm(e) {
  const term = e.target.value.toLowerCase();
  const items = list.querySelectorAll("li");
  items.forEach((item) => {
    const title = item.firstElementChild.textContent;
    if (title.toLowerCase().indexOf(term) != -1) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}

//### Tabbed Content
const tabs = document.querySelector(".tabs");
const panels = document.querySelectorAll(".panel");

tabs.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    const targetTab = document.querySelector(e.target.dataset.tab);
    panels.forEach((panel) => {
      if (panel == targetTab) {
        panel.classList.add("active");
      } else {
        panel.classList.remove("active");
      }
    });
  }
});
