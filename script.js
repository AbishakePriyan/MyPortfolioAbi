function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000); // Hide after 3 seconds
}

function SendMail(event) {
  event.preventDefault(); // Prevent form reload

  var params = {
    from_name : document.getElementById("from_name").value,
    email_id : document.getElementById("from_email").value,
    message : document.getElementById("message").value
  }

  emailjs.send("service_687g2zo", "template_tkdxyqw", params).then(function (res){
    showToast("Message sent successfully!");
    document.getElementById("contact-form").reset(); // Clear form after success
  }).catch(function (error) {
    showToast("❌ Failed to send message.");
    console.error("EmailJS error:", error);
  });
}

function toggleMenu() {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("active");
}

