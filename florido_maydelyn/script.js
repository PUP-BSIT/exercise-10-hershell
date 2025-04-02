let nameInput = document.getElementById("comment_name");
let commentInput = document.getElementById("comment");
let commentButton = document.getElementById("comment_button");

function toggleButton() {
  commentButton.disabled = !(
    nameInput.value.trim() && commentInput.value.trim()
  );
}

function addElement() {
  let nameInput = document.getElementById("comment_name").value;
  let commentInput = document.getElementById("comment").value;

  let commentSection = document.querySelector(".groupmate-comments");
  let commentHolder = document.createElement("p");
  commentSection.append(commentHolder);
  commentHolder.textContent = nameInput + ": " + commentInput;

  clearInput();
  toggleButton();
}

function clearInput() {
  nameInput.value = "";
  commentInput.value = "";
}

document.getElementById("comment_name").addEventListener("input", toggleButton);
document.getElementById("comment").addEventListener("input", toggleButton);
document.getElementById("comment_button").addEventListener("click", addElement);
