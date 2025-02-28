document.title = "MASSIVE++";

const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const navbar = document.querySelector(".navbar");

// Show nav and close icon when menu icon is clicked
menuIcon.addEventListener("click", () => {
  navbar.style.display = "flex";
  menuIcon.style.display = "none";
});

// Hide nav and show menu icon when close icon is clicked
closeIcon.addEventListener("click", () => {
  navbar.style.display = "none";
  menuIcon.style.display = "block";
});


// ============ light  and dark mode=================
let lightMode = localStorage.getItem("Light-Mode");
const themeSwitch = document.getElementById("theme-switch");

const enableDarkmode = () => {
  document.body.classList.add("Light-Mode");
  localStorage.setItem("Light-Mode", "active");
};

const disableDarkmode = () => {
  document.body.classList.remove("Light-Mode");
  localStorage.setItem("Light-Mode", null);
};

if (lightMode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
  lightMode = localStorage.getItem("Light-Mode");
  lightMode !== "active" ? enableDarkmode() : disableDarkmode();
});

// ============ Scroll section active link =================

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(`header nav a[href*="${id}"]`)
          .classList.add("active");
      });
    }
  });

  // ============ Sticky navbar =================

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // ============ Remove toggle icon and navbar =================
  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

// JavaScript for modal
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const closeButton = document.querySelector(".close-button");
  const modalText = document.getElementById("modal-text");
  const readMoreButtons = document.querySelectorAll(".read-more");

  readMoreButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      const target = button.getAttribute("data-target");
      let content = "";

      switch (target) {
        case "web-development":
          content = `I believe in the power of code to transform ideas into reality, turning creative concepts into dynamic, user-friendly, and high-performing digital experiences. As a frontend developer, I specialize in designing and developing modern, responsive, and visually compelling web applications using HTML, CSS, JavaScript, and React.

         My development philosophy revolves around writing clean, efficient, and maintainable code, ensuring that every project is scalable, optimized, and future-proof. With a strong foundation in responsive design, I create web applications that seamlessly adapt to different screen sizes and devices, delivering a consistent and engaging user experience across desktops, tablets, and mobile devices.

        Beyond coding, I have a deep understanding of UI/UX principles, allowing me to craft intuitive and accessible interfaces that enhance user interaction. I am also passionate about performance optimization, cross-browser compatibility, and accessibility, ensuring that the websites and applications I build meet the highest industry standards.

       I am committed to continuous learning and innovation, constantly exploring new frameworks, technologies, and best practices to stay ahead in this rapidly evolving field. Whether it’s implementing interactive features, refining design aesthetics, or optimizing site speed, I bring creativity, problem-solving, and technical excellence to every project.

      My ultimate goal is to develop seamless, high-quality digital experiences that not only meet but exceed user expectations, making a meaningful impact through technology.`;
          break;

        case "system-administration":
          content = `A highly skilled System Administrator with extensive experience in managing, maintaining, and optimizing IT infrastructures. My expertise lies in ensuring the stability, security, and efficiency of server and network systems, enabling seamless business operations and minimizing downtime.

        With a strong background in server administration, network configuration, system monitoring, and troubleshooting, I am proficient in implementing security protocols, backup solutions, and performance optimizations to safeguard critical data and maintain business continuity. I have hands-on experience with Windows and Linux servers, virtualization technologies, cloud computing, and IT automation, allowing me to streamline workflows and improve overall system reliability.

       I am passionate about staying ahead of emerging technologies, continuously enhancing my skills to implement the latest IT solutions and best practices. My ability to diagnose and resolve complex technical issues efficiently makes me a valuable asset in ensuring smooth and secure IT operations.

      Committed to efficiency, scalability, and security, my goal is to provide robust IT infrastructure solutions that empower businesses to operate at their full potential while maintaining high levels of performance and reliability.`;
          break;
        case "about":
          content = `I am a dedicated and detail-oriented Junior Frontend Developer with a strong foundation in modern web technologies and user-centric design. Passionate about crafting visually appealing, highly responsive, and intuitive digital experiences, I specialize in developing web applications that seamlessly blend aesthetics with functionality.

            With expertise in HTML, CSS, JavaScript, and React, I focus on building clean, maintainable, and efficient code to ensure optimal performance and scalability. My strong understanding of responsive design principles allows me to create web applications that adapt flawlessly to various screen sizes and devices, enhancing accessibility and user engagement.

            Beyond technical skills, I possess a keen eye for design and UI/UX principles, ensuring that every interface I develop is not only visually compelling but also intuitive and user-friendly. I thrive in problem-solving scenarios, leveraging my analytical mindset to debug issues, optimize website performance, and implement innovative solutions that improve overall user experience.

            I am committed to continuous learning and staying up to date with industry trends, consistently refining my skills and exploring emerging frontend technologies. Whether collaborating within a team or working independently, I strive to deliver high-quality, functional, and engaging web solutions that elevate digital experiences and meet the evolving needs of users.

            My goal is to contribute to impactful projects, leveraging my skills and passion for frontend development to build seamless, efficient, and modern web applications that make a lasting impression.`;
          break;
        default:
          content = `Additional information not available.`;
          break;
      }

      modal.style.display = "block";
      modalText.textContent = content;
    });
  });

  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

// DYNAMIC TEXT CHANGING SCRIPT
document.addEventListener("DOMContentLoaded", function () {
  const texts = [" Junior Frontend Developer", "System Administrator"];
  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";

  (function type() {
    if (count === texts.length) {
      count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    document.querySelector(".multiple-text").textContent = letter;
    if (letter.length === currentText.length) {
      count++;
      index = 0;
    }
    setTimeout(type, 400);
  })();
});

// ============ Scroll Reveal =================
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-contact h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-contact p, .about-contact .skills", { origin: "right" });

// ============ TYPED JS =================
const typed = new Typed(".multiple-texts", {
  strings: ["Junior Frontend Developer", "System Administrator"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});

// ============ Receiving emails from clients =================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
      Toastify({
        text: "Please fill in the forms!",
        duration: 2000,
        gravity: "top",
        position: "right",
        backgroundColor:
          "linear-gradient(to right,rgb(114, 40, 30),rgb(152, 42, 51))",
        stopOnFocus: true, // Prevents dismiss on hover
      }).showToast();

      return;
    }

    const params = {
      name,
      email,
      phone,
      subject,
      message,
    };

    emailjs
      .send("service_pu9itve", "template_h98uj8k", params)
      .then((response) => {
        console.log("Email sent successfully:", response);
        Toastify({
          text: "Message Sent!",
          duration: 2000,
          gravity: "top",
          position: "right",
          backgroundColor:
            "linear-gradient(to right,rgb(30, 111, 114),rgb(42, 152, 110))",
          stopOnFocus: true, // Prevents dismiss on hover
        }).showToast();

        form.reset();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Error sending email. Please try again.");
      });
  });
});
