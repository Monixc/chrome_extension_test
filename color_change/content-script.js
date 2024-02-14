document.addEventListener("keyup", function (e) {
  if (e.keyCode === 82) {
    let comments = document.querySelectorAll("ytd-comment-renderer");

    comments.forEach((comment) => {
      comment.style.background = "#FF7C02";
    });
  }
});
