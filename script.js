document.addEventListener("DOMContentLoaded", function () {
    // Cursor effect (unchanged)
    const cursorDot = document.createElement("div");
    cursorDot.classList.add("cursor-dot");

    const arrow = document.createElement("div");
    arrow.classList.add("arrow");

    document.body.appendChild(cursorDot);
    document.body.appendChild(arrow);

    document.addEventListener("mousemove", function (event) {
        cursorDot.style.left = `${event.clientX}px`;
        cursorDot.style.top = `${event.clientY}px`;
    });

    // Theme Toggle
    const themeToggle = document.getElementById("theme-toggle");

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        themeToggle.innerHTML = document.body.classList.contains("dark-mode") ? "☀" : "🌙";
    });

    // Projects Section
    document.getElementById("project-button").addEventListener("click", function (event) {
        event.preventDefault();
        const mainContent = document.querySelector("main");

        // Sample projects
        const projects = [
            { title: "E-Commerce Website", description: "A full-stack e-commerce platform with secure payments." },
            { title: "Portfolio Website", description: "A sleek and modern portfolio site to showcase skills." },
            { title: "Chat Application", description: "A real-time chat app with WebSocket integration." },
            { title: "Weather App", description: "A web app that fetches live weather data from an API." }
        ];

        mainContent.innerHTML = `<h2>My Projects</h2><div class="projects-container"></div>`;
        const projectsContainer = document.querySelector(".projects-container");

        projects.forEach((project, index) => {
            const projectCube = document.createElement("div");
            projectCube.classList.add("cube");
            projectCube.dataset.index = index;

            projectCube.innerHTML = `
                <div class="cube-inner">
                    <div class="cube-face cube-front">${project.title}</div>
                    <div class="cube-face cube-back">${project.description}</div>
                    <div class="cube-face cube-top">Click to View</div>
                    <div class="cube-face cube-bottom">More Info</div>
                    <div class="cube-face cube-left">Tech Stack</div>
                    <div class="cube-face cube-right">Features</div>
                </div>
            `;
            projectsContainer.appendChild(projectCube);
        });

        // Handle cube rotation
        document.querySelectorAll(".cube").forEach(cube => {
            cube.addEventListener("click", function () {
                this.classList.toggle("rotated");
            });
        });
    });
     // Home button functionality
     document.getElementById("home-button").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent page reload

        // Get the main content area
        const mainContent = document.querySelector("main");
        if (!mainContent) {
            console.error("No <main> section found.");
            return;
        }

        // Update the content dynamically
        mainContent.innerHTML = `
            <h1 class="big-name">Geeti Fatima</h1>
            <p class="strength">I am <span id="dynamic-text"></span></p>
        `;

        // Start the typing effect
        startTypingEffect();
    });

    function startTypingEffect() {
        const strengths = ["a hardworker", "determined", "passionate"];
        let index = 0;
        const textElement = document.getElementById("dynamic-text");

        function typeEffect(text, callback) {
            textElement.innerHTML = ""; // Clear previous text
            let i = 0;

            function type() {
                if (i < text.length) {
                    textElement.innerHTML += text[i];
                    i++;
                    setTimeout(type, 100);
                } else {
                    setTimeout(callback, 10000); // Show for 10 seconds
                }
            }
            type();
        }

        function cycleStrengths() {
            typeEffect(strengths[index], () => {
                index = (index + 1) % strengths.length;
                cycleStrengths();
            });
        }

        cycleStrengths();
    }
    // FAQ button functionality
    document.getElementById("faq-button").addEventListener("click", function (event) {
        event.preventDefault();
        const mainContent = document.querySelector("main");

        // FAQ questions and answers
        const faqs = [
            { question: "What is HTML?", answer: "HTML (HyperText Markup Language) is the standard language for creating web pages." },
            { question: "What is CSS used for?", answer: "CSS (Cascading Style Sheets) is used to style and layout web pages." },
            { question: "What is JavaScript?", answer: "JavaScript is a programming language that makes web pages interactive." },
            { question: "What is responsive design?", answer: "Responsive design ensures a website looks good on all devices, using flexible grids and layouts." },
            { question: "What is a front-end framework?", answer: "A front-end framework (like React or Vue) helps developers build dynamic web applications more efficiently." }
        ];

        // Generate FAQ content
        mainContent.innerHTML = `<h2>Frequently Asked Questions</h2><div class="faq-container"></div>`;
        const faqContainer = document.querySelector(".faq-container");

        faqs.forEach((faq, index) => {
            const faqItem = document.createElement("div");
            faqItem.classList.add("faq-item");

            faqItem.innerHTML = `
                <div class="faq-question">
                    <span>${faq.question}</span>
                    <button class="faq-toggle" data-index="${index}">▼</button>
                </div>
                <div class="faq-answer">${faq.answer}</div>
            `;
            faqContainer.appendChild(faqItem);
        });

        // Add event listener for dropdown behavior
        document.querySelectorAll(".faq-toggle").forEach(button => {
            button.addEventListener("click", function () {
                document.querySelectorAll(".faq-answer").forEach(answer => answer.classList.remove("active"));
                document.querySelectorAll(".faq-toggle").forEach(btn => btn.innerHTML = "▼");

                const index = this.dataset.index;
                const answer = document.querySelectorAll(".faq-answer")[index];
                if (!answer.classList.contains("active")) {
                    answer.classList.add("active");
                    this.innerHTML = "▲";
                }
            });
        });
    });
});