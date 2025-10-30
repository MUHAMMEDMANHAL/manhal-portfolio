// ====== EmailJS Function ======
function sendMail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_nss2e0n", "template_ithcdmo", params)
    .then(() => alert("✅ Email Sent Successfully!"))
    .catch((err) => console.error("Email send failed:", err));
}

// ====== Navbar Toggle ======
document.getElementById("menu-toggle").addEventListener("click", function () {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("active");
});
