const commentName = document.getElementById("comment_name");
const commentMessage = document.getElementById("comment_form");
const commentButton = document.getElementById("comment_button");
const commentContainer = document.getElementById("comment_list");

const commentData = [
  {
    name: "Florido",
    comment: `Wow!`,
    date: new Date("03/19/2025, 10:15:28 PM"),
  },
  {
    name: "Siervo",
    comment: `wow`,
    date: new Date("03/19/2025, 10:20:34 PM"),
  },
  {
    name: "Riomalos",
    comment: `These goals are excellent and show that you’re planning 
    for a bright future filled with new experiences!`,
    date: new Date("03/19/2025, 10:33:45 PM"),
  },
];

function validateComment() {
  commentButton.disabled = !(
    commentName.value.trim() && commentMessage.value.trim()
  );
}

function addComment() {
  const newComment = {
    name: commentName.value,
    comment: commentMessage.value,
    date: new Date(),
  };

  commentData.push(newComment);
  sortComments();
}

function updateComments() {
  commentContainer.innerHTML = "";

  for (const comment of commentData) {
    const newComment = document.createElement("li");
    const commentDate = new Date(comment.date);

    newComment.innerHTML = `
        ${comment.name}: ${comment.comment}
        (${commentDate.toLocaleString()})`;

    commentContainer.append(newComment);
  }
}

commentName.addEventListener("input", validateComment);
commentMessage.addEventListener("input", validateComment);
commentButton.addEventListener("click", addComment);
