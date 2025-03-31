const commentName = document.getElementById("comment_name");
const commentMessage = document.getElementById("comment_form");
const commentButton = document.getElementById("comment_button");
const commentContainer = document.getElementById("comment_list");

function validateComment() {
  if (commentName.value.length && commentMessage.value.length) {
    commentButton.disabled = false;
  } else {
    commentButton.disabled = true;
  }
}

function addComment() {
  const newComment = {
    name: commentName.value,
    comment: commentMessage.value,
  };

  const newCommentElement = document.createElement("li");
  newCommentElement.innerHTML = `${newComment.name}: ${newComment.comment}`;

  commentContainer.appendChild(newCommentElement);

  commentName.value = "";
  commentMessage.value = "";
  validateComment();
}

commentName.addEventListener("input", validateComment);
commentMessage.addEventListener("input", validateComment);
commentButton.addEventListener("click", addComment);
