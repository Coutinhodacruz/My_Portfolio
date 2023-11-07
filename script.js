let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });

      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");

  let footer = document.querySelector("footer");

  footer.classList.toggle(
    "show-animate",
    this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight
  );
};

const contactBtn = document.getElementById("contactBtn");
const phoneNumberDiv = document.getElementById("phoneNumber");

contactBtn.addEventListener("click", function (event) {
  event.preventDefault();
  phoneNumberDiv.style.display = "block";
});



const contactForm = document.getElementById("contactForm");
const confirmationMessage = document.getElementById("confirmationMessage");

contactForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const fullName = document.getElementById("fullName").value;
  console.log("fullName --> ", fullName);
  const email = document.getElementById("email").value;
  console.log("email --> ", email);
  const phoneNumber = document.getElementById("mobileNumber").value;
  console.log("phoneNumber --> ", phoneNumber);
  const emailSubject = document.getElementById("emailSubject").value;
  console.log("emailSubject --> ", emailSubject);
  const message = document.getElementById("message").value;
  console.log("message --> ", message);

  try {
    const response = await fetch("http://localhost:3000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber,
        emailSubject: emailSubject,
        message: message,
      }),
    });

    const data = await response.json();

    if (data.success) {
      confirmationMessage.textContent = "Message sent successfully!";
      confirmationMessage.style.color = "green";
    } else {
      confirmationMessage.textContent =
        "Failed to send message. Please try again later.";
      confirmationMessage.style.color = "red";
    }
  } catch (error) {
    console.error("Error:", error);
    confirmationMessage.textContent =
      "Failed to send message. Please try again later.";
    confirmationMessage.style.color = "red";
  }
});





























// const contactForm = document.getElementById("contactForm");
// const confirmationMessage = document.getElementById("confirmationMessage");

// contactForm.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const fullName = document.getElementById("fullName").value;
//   const email = document.getElementById("email").value;
//   console.log("email --> ", email);
//   const phoneNumber = document.getElementById("mobileNumber").value;
//   console.log("phoneNumber --> ", phoneNumber);
//   const emailSubject = document.getElementById("emailSubject").value;
//   console.log("emailSubject --> ", emailSubject);
//   const message = document.getElementById("message").value;
//   console.log("message --> ", message);

//   // Send form data to the server
//   fetch("http://localhost:3000/send-email", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       fullName: fullName,
//       email: email,
//       phoneNumber: phoneNumber,
//       emailSubject: emailSubject,
//       message: message,
//     }),
//   })
//     .then((response) => {
//         console.log("response.json() --> ", response.json());
//         response.json()
//     })
//     .then((data) => {
//       if (data.success) {
//         confirmationMessage.textContent = "Message sent successfully!";
//         confirmationMessage.style.color = "green";
//       } else {
//         confirmationMessage.textContent =
//           "Failed to send message. Please try again later.";
//         confirmationMessage.style.color = "red";
//       }
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//       confirmationMessage.textContent =
//         "Failed to send message. Please try again later.";
//       confirmationMessage.style.color = "red";
//     });
// });

