function sendMail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  }
  emailjs.send("service_nss2e0n","template_ithcdmo",params).then(alert("email send!!"))

}
