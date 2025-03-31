let nameInput = document.getElementById("comment_name");
let commentInput = document.getElementById("comment_text");
let commentButton = document.getElementById("comment_button");
let commentsSection = document.querySelector(".group-comment");

function toggleButton() {
  if (nameInput.value.trim() && commentInput.value.trim()) {
    commentButton.disabled = false;
  } else {
    commentButton.disabled = true;
  }
}

function addComment() {
  let name = nameInput.value.trim();
  let comment = commentInput.value.trim();

  if (name && comment) {
    let newComment = document.createElement("p");
    newComment.textContent = `${name}: ${comment}`;
    commentsSection.appendChild(newComment);

    nameInput.value = "";
    commentInput.value = "";
    commentButton.disabled = true;
  }
}

nameInput.addEventListener("input", toggleButton);
commentInput.addEventListener("input", toggleButton);
commentButton.addEventListener("click", addComment);