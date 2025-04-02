let nameInput = document.getElementById("comment_name");
let commentInput = document.getElementById("comment_text");
let commentButton = document.getElementById("comment_button");
let commentsSection = document.querySelector(".group-comment");
let sortButton = document.getElementById("sort_button");

let comments = [];
let ascending = true;

function toggleButton() {
  commentButton.disabled = !(
    nameInput.value.trim() && commentInput.value.trim()
  );
}

function addComment() {
  let name = nameInput.value.trim();
  let comment = commentInput.value.trim();
  let timestamp = new Date();

  if (name && comment) {
    comments.push({ name, comment, timestamp });
    displayComments();

    nameInput.value = "";
    commentInput.value = "";
    commentButton.disabled = true;
  }
}

function displayComments() {
  let existingParagraphs = commentsSection.querySelectorAll("p.new-comment");
  existingParagraphs.forEach((p) => p.remove());

  let sortedComments = comments
    .slice()
    .sort((a, b) =>
      ascending ? a.timestamp - b.timestamp : b.timestamp - a.timestamp
    );

  sortedComments.forEach(({ name, comment, timestamp }) => {
    let newComment = document.createElement("p");
    newComment.classList.add("new-comment");
    newComment.textContent = `${name}: ${comment} (${timestamp.toLocaleString()})`;
    commentsSection.appendChild(newComment);
  });
}

function toggleSort() {
  ascending = !ascending;
  sortButton.textContent = ascending
    ? "Sort by Date (Ascending)"
    : "Sort by Date (Descending)";
  displayComments();
}

sortButton.addEventListener("click", toggleSort);
nameInput.addEventListener("input", toggleButton);
commentInput.addEventListener("input", toggleButton);
commentButton.addEventListener("click", addComment);