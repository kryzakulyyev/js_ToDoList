document.querySelector('#add_item').onclick = function() {
  // Grap the todo item value
  let inputBox = document.querySelector('#input_box');
  console.log(inputBox.value);

  // Check if it is NOT empty
  if(inputBox.value) {
    // Create a li item for ul element
    let listItem = document.createElement('li');

    // Assign todo item value to text of list item
    listItem.innerHTML = inputBox.value;  

    // Add created li item to the ul element
    document.querySelector('#ul_list').appendChild(listItem);

    // Clean the input value after adding the todo item
    inputBox.value = "";
  } else {
    alert("Please add item!");
  }
  
}