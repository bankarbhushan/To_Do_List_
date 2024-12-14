let input_box = document.querySelector("#input_box");
let list = document.querySelector("#list");
let progressBar = document.querySelector(".progress");

input_box.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addItem(this.value);
    this.value = "";
    // Clears the input box (this.value = "") after adding the item.
  }
});

let addItem = (input_box_value) => {
  if (input_box_value === "") {
    alert("Its Look like Empty task ");
    return 0;
  }
  let listItem = document.createElement("li");
  listItem.innerHTML = `${input_box_value} <i></i>`;
  // <i> element, which will serve as the delete button.

  listItem.addEventListener("click", function () {
    this.classList.toggle("done");
    updateProgress();
    // when click on li
  });

  listItem.querySelector("i").addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent the li click event
    listItem.remove();
    updateProgress();
    // when user remove work
  });

  list.appendChild(listItem);
  updateProgress();
};

let updateProgress = () => {
  let items = document.querySelectorAll("#list li");
  let doneItems = document.querySelectorAll("#list li.done");
  let progress =
    items.length === 0 ? 0 : (doneItems.length / items.length) * 100;

  progressBar.style.width = progress + "%";

  let show_progress = document.getElementById("show_progress");
  show_progress.innerHTML =
    items.length === 0 ? "No Tasks" : progress.toFixed(0) + "%";

  // Color coding based on progress percentage
  if (progress === 100) {
    show_progress.style.color = "#008000"; // Green
  } else if (progress > 75) {
    show_progress.style.color = "#90EE90"; // Light Green
  } else if (progress > 50) {
    show_progress.style.color = "#FFFF00"; // Yellow
  } else if (progress > 25) {
    show_progress.style.color = "#FFA500"; // Orange
  } else {
    show_progress.style.color = "#FF0000"; // Red
  }

  // Motivational messages based on progress percentage
  let messageElement = document.getElementById("message");
  if (progress === 100) {
    messageElement.innerHTML =
      "Amazing! You've completed all tasks. Keep it up!";
    messageElement.style.color = "#008000";
  } else if (progress > 75) {
    messageElement.innerHTML = "Great job! You're almost there!";
    messageElement.style.color = "#90EE90";
  } else if (progress > 50) {
    messageElement.innerHTML = "You're halfway through! Keep pushing!";
    messageElement.style.color = "#FFFF00";
  } else if (progress > 25) {
    messageElement.innerHTML = "Good start! Stay focused and keep going!";
    messageElement.style.color = "#FFA500";
  } else if (progress > 0) {
    messageElement.innerHTML = "Every step counts! You can do it!";
    messageElement.style.color = "#FF0000";
  } else {
    messageElement.innerHTML = "No tasks completed yet. Start strong!";
    messageElement.style.color = "#FF0000";
  }
};

// dark
const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  // document.box.classList.toggle("dark");
  document.querySelector(".box").classList.toggle("dark");
});
