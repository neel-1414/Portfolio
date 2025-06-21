document.addEventListener('DOMContentLoaded', () => {
  const emailText = document.getElementById("emailtext");
  const copymsg = document.getElementById("copymsg");

  emailText.addEventListener("click", () => {
    navigator.clipboard.writeText("neelyshinde1@gmail.com").then(() => {
    copymsg.classList.add("show");
      setTimeout(() => {
        copymsg.classList.remove("show");
      }, 2000);
    });
  });
});
