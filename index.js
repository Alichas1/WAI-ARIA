//uppgift 1.

const modal = document.getElementById("accessibleModal");
const btnOpen = document.getElementById("openModalBtn");
const btnClose = document.getElementById("closeModalBtn");

btnOpen.addEventListener("click", () => {
  modal.setAttribute("aria-hidden", "false");
  modal.style.display = "block";
  btnClose.focus();
});

btnClose.addEventListener("click", () => {
  modal.setAttribute("aria-hidden", "true");
  modal.style.display = "none";
  btnOpen.focus();
  btnOpen.showModal();
});

modal.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.setAttribute("aria-hidden", "true");
    modal.style.display = "none";
    btnOpen.focus();
  }
});

//uppgift 2.

const dialog = document.getElementById("accessibleDialog");
const closeDialog = document.getElementById("closeDialogBtn");
const openDialog = document.getElementById("openDialogbtn");

openDialog.addEventListener("click", () => {
  dialog.setAttribute("aria-modal", "false");
  dialog.showModal();
});

closeDialog.addEventListener("click", () => {
  dialog.setAttribute("aria-modal", "true");
  dialog.close();
});

dialog.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    dialog.close();
    openDialog.focus();
  }
});

//uppgift 3.

const menuBtn = document.getElementById("menuButton");
const contentMenu = document.getElementById("menuContent");

menuBtn.addEventListener("click", () => {
  const openmenu = contentMenu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", openmenu);
  if (openmenu) {
    contentMenu.querySelector("a").focus();
  }
});
