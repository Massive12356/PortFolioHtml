document.title = "MASSIVE++"

// ============ Toggle icon navbar =================

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-xmark')
    navbar.classList.toggle('active')
}

// ============ scroll section active  link =================

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach( sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if( top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });

    // ============ sticky navbar =================

    let header = document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 100);

      // ============ remove toggle icon and navbar =================
      menuIcon.classList.remove('fa-xmark');
      navbar.classList.remove('active');
}

            // JavaScript for modal
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    const modalText = document.getElementById('modal-text');
    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const target = button.getAttribute('data-target');
            let content = '';

            switch (target) {
                case 'about':
                    content = `As a frontend developer, I have extensive experience in crafting user-friendly interfaces and ensuring smooth user experiences. My journey in web development began with a strong foundation in computer science, and I have since explored various technologies and frameworks to stay updated with industry trends. My passion lies in creating visually appealing and functional websites that leave a lasting impression on users.`;
                    break;
                case 'web-development':
                    content = `Web development is my passion and expertise. I excel in creating responsive and intuitive web applications using the latest frontend technologies like HTML, CSS, and JavaScript. My projects focus on delivering seamless user experiences and leveraging the power of code to turn ideas into reality. My Skills in Web Development
                    HTML5 & CSS3: Crafting clean, semantic, and accessible markup with modern CSS techniques.
                    JavaScript & TypeScript: Developing interactive and dynamic web applications.
                    Frameworks & Libraries: Proficient in React.js
                    
                    API Integration: Building and consuming RESTful APIs to enhance functionality.
                    Responsive Design: Ensuring websites look great on all devices, from desktops to smartphones.
                    My Approach
                    I believe in the power of code to transform ideas into reality. My approach to web development is centered on writing clean, maintainable code and constantly learning new technologies to stay ahead in this fast-paced field. I am committed to delivering high-quality solutions that meet client requirements and exceed user expectations.`;
                    break;
                case 'ui-designing':
                    content = `UI/UX designing is where art meets functionality for me. I am dedicated to crafting visually stunning and user-friendly interfaces that elevate the overall user experience. With a keen eye for detail and a deep understanding of user behavior, I ensure every design element serves a purpose and enhances usability. 
                    My Skills in UI/UX Design
                    User Research: Conducting user interviews, surveys, and usability testing to understand user needs.
                    Wireframing & Prototyping: Creating wireframes and interactive prototypes using tools like Figma, Sketch, and Adobe XD.
                    Visual Design: Designing stunning interfaces with a focus on usability and aesthetics.
                    Interaction Design: Crafting smooth and engaging user interactions.
                    Accessibility: Ensuring designs are accessible to all users, including those with disabilities.
                    Design Systems: Building and maintaining consistent design systems and style guides.
                    My Approach
                    I believe that great design is born from empathy and a deep understanding of the user. My design process is user-centric, involving continuous feedback and iteration to create products that truly resonate with users. I strive to balance creativity with functionality, ensuring that every design decision enhances the overall user experience.`;
                    break;
                case 'system-administration':
                    content = `System administration is my forte, where I ensure the stability, security, and efficiency of IT infrastructures. With a focus on maintaining server and network systems, I optimize performance and reliability to support seamless business operations. 

                    My Skills in System Administration
                    Server Management: Installing, configuring, and maintaining servers (Windows, Linux).
                    Network Administration: Managing network infrastructure, including routers, switches, and firewalls.
                    Security: Implementing security measures to protect systems from threats and vulnerabilities.
                    Backup & Recovery: Developing and managing backup strategies to ensure data integrity.
                    Automation: Using scripts and automation tools to streamline system administration tasks.
                    Monitoring: Setting up and maintaining monitoring systems to ensure optimal performance and uptime. 
                    My Approach
                    I believe in proactive and diligent system management to prevent issues before they arise. My approach involves continuous monitoring, regular updates, and thorough documentation to maintain a secure and efficient IT environment. I am committed to providing reliable and scalable solutions that support organizational goals and drive business success`;
                    break;
                default:
                    content = `Additional information not available.`;
                    break;
            }

            modal.style.display = 'block';
            modalText.textContent = content;
        });
    });


    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});

         // DYNAMIC TEXT CHANGING SCRIPT
    
         document.addEventListener('DOMContentLoaded', function () {
            const texts = ["Frontend Developer", "UI/UX Designer", "System Administrator", "about"];
            let count = 0;
            let index = 0;
            let currentText = '';
            let letter = '';

            (function type() {
                if (count === texts.length) {
                    count = 0;
                }
                currentText = texts[count];
                letter = currentText.slice(0, ++index);
                document.querySelector('.multiple-text').textContent = letter;
                if (letter.length === currentText.length) {
                    count++;
                    index = 0;
                }
                setTimeout(type, 400);
            }());
        });


        // ============ Scroll Reveal =================
        ScrollReveal({ 
            distance: '80px',
            duration: 2000,
            delay: 200,
        });

        ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
        ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'buttom' });
        ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
        ScrollReveal().reveal('.home-contact p, .about-contact', { origin: 'right' });

        // ============ TYPED JS =================
        const typed = new Typed('.multiple-texts',{
            strings: ['Frontend Developer', 'Web Designer', 'System Administrator'],
            typedSpeed: 70,
            backSpeed:  70,
            backDelay: 1000,
            loop: true,
        })

        

        // ============ receiving emails form clients =================

        // Set up form handling when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", (event) => {
        // Prevent the default form submission
        event.preventDefault();

        // Get values from the FORM FIELDS
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // Check if all fields are filled
        if (!name || !email || !subject || !phone || !message) {
            alert("Please fill in all fields");
            return; // Stop further execution
        }
        

        // Prepare the parameters for EmailJS
        const params = {
            name: name,
            email: email,
            phone: phone,
            subject: subject,
            message: message,
        };

        // Send the email using EmailJS
        emailjs.send("service_setfa2v", "template_efti3xj", params)
            .then(response => {
                console.log('Email sent successfully:', response);
                alert("Email sent successfully");
                form.reset(); // Reset the form fields after successful submission
            })
            .catch(error => {
                console.error('Error sending email:', error);
                alert("Error sending email. Please try again.");
            });
    });
});




