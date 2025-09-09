var input = document.getElementById("input");

function addTodo() {
  var ul = document.getElementById("output");
  var li = document.createElement("li");
  var counter = ul.childElementCount;

  li.innerHTML = "<div class='outputLi'>" + input.value + "<button onclick='editTodo("+ counter +")'> Edit </button><button onclick='deleteTodo(" + counter + ")'>Delete</button></div>"
  li.setAttribute("id", counter)
  ul.appendChild(li)
  input.value = ""
}

function deleteTodo(id) {
  var li = document.getElementById(id)
  li.remove();
}
function editTodo(id) {
    console.log("working");

      
}

// edit button, with id pass
// editBtn, get li with id
// get text of that li, and set the input value with the li text
// hide the add button, show the edit btn,
// add a function in the attribute onclick in edit btn
// make a function editTodo
// get the same li, set the value with new value;
// hide the edit btn, show the add btn.