function checkForm() {
  let name = document.getElementById("name_comment").value;
  let comment = document.getElementById("comment").value;
  let button = document.getElementById("comment_button");

  if (name && comment) {
    button.disabled = false;
    button.classList.remove("disabled");
    button.classList.add("enabled");
  } else {
    button.disabled = true;
    button.classList.remove("enabled");
    button.classList.add("disabled");
  }
}

let commentForm = document.querySelector(".comment-form form");
let commentsSection = document.querySelector(".teammate-comment");

function appendComment(event) {
  event.preventDefault();

  let name = document.getElementById("name_comment").value;
  let comment = document.getElementById("comment").value;

  let newComment = document.createElement("p");
  newComment.textContent = `${comment} -${name}`;

  commentsSection.appendChild(newComment);

  document.getElementById("name_comment").value = "";
  document.getElementById("comment").value = "";

  checkForm();
}

commentForm.addEventListener("submit", appendComment);
