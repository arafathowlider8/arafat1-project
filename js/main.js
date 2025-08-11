// js/main.js

const ADMIN_EMAIL = "arafathowlider5@gmail.com";

function adminLogin() {
  const email = document.getElementById("adminEmail").value;
  if (email === ADMIN_EMAIL) {
    document.getElementById("admin-login").style.display = "none";
    document.getElementById("admin-dashboard").style.display = "block";
  } else {
    alert("আপনি এডমিন নন। কাস্টমার প্যানেল দেখুন।");
    window.location.href = "index.html";
  }
}

function logout() {
  document.getElementById("admin-dashboard").style.display = "none";
  document.getElementById("admin-login").style.display = "block";
}

function uploadProduct() {
  const name = document.getElementById("productName").value;
  const image = document.getElementById("productImage").files[0];
  alert("প্রোডাক্ট আপলোড সফল: " + name);
}
