function openModal(title, desc, price, image) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalDesc").innerText = desc;
  document.getElementById("modalPrice").innerText = price;
  document.getElementById("modalImage").src = image;

  document.getElementById("productModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("productModal").style.display = "none";
}

window.onclick = function (e) {
  const modal = document.getElementById("productModal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
