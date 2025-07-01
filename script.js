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

function toggleSideMenu() {
  const menu = document.getElementById('sideMenu');
  menu.classList.toggle('active');
}

// Close when clicking outside
document.addEventListener('click', function (event) {
  const menu = document.getElementById('sideMenu');
  const toggle = document.querySelector('.menu-toggle-btn');

  if (!menu.contains(event.target) && !toggle.contains(event.target)) {
    menu.classList.remove('active');
  }
});

function openMenu() {
  document.getElementById("sideMenu").classList.add("active");
  document.getElementById("sideMenuOverlay").classList.add("active");
}

function closeMenu() {
  document.getElementById("sideMenu").classList.remove("active");
  document.getElementById("sideMenuOverlay").classList.remove("active");
}

const toggleBtn = document.querySelector('.toggle-btn');
const sidebar = document.querySelector('.sidebar');

// Open menu
toggleBtn.addEventListener('click', () => {
  sidebar.classList.add('active');
});

// Close when clicking X inside sidebar
document.querySelector('.close-btn').addEventListener('click', () => {
  sidebar.classList.remove('active');
});

// Close when clicking outside sidebar
document.addEventListener('click', (event) => {
  if (
    !sidebar.contains(event.target) &&
    !toggleBtn.contains(event.target)
  ) {
    sidebar.classList.remove('active');
  }
});
