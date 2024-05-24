document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("about").style.display = "block";

    var navLinks = document.querySelectorAll(".nav-link");
    var sections = document.querySelectorAll(".section");

    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            var targetId = this.getAttribute("href").substring(1);
            sections.forEach(function(section) {
                if (section.id === targetId) {
                    section.style.display = "block";
                } else {
                    section.style.display = "none";
                }
            });
        });
    });

    // Dark/light mode switch
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'dark') {
            themeToggle.checked = true;
        }
    }

    themeToggle.addEventListener('change', function() {
        if (themeToggle.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("atomCanvas");
    const ctx = canvas.getContext("2d");

    const headerHeight = document.querySelector("header").offsetHeight;
    const headerWidth = document.querySelector("header").offsetWidth;
    const numberOfAtoms = 5; // Number of atoms to generate
    const atoms = [];

    function drawAtom(centerX, centerY, radius, numberOfElectrons) {
        // Draw nucleus
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(centerX, centerY, 15, 0, Math.PI * 2);
        ctx.fill();

        // Draw electrons
        ctx.fillStyle = "#fff";
        const electronSpeeds = Array.from({ length: numberOfElectrons }, () => Math.random() * 0); // Generate random speeds for each electron
        const electronAngles = Array.from({ length: numberOfElectrons }, () => Math.random() * Math.PI * 2); // Generate random starting angles for each electron
        for (let i = 0; i < numberOfElectrons; i++) {
            const electronX = centerX + Math.cos(electronAngles[i]) * radius;
            const electronY = centerY + Math.sin(electronAngles[i]) * radius;
            ctx.beginPath();
            ctx.arc(electronX, electronY, 5, 0, Math.PI * 2);
            ctx.fill();

            // Update electron angles
            electronAngles[i] += electronSpeeds[i];
        }
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function renderAtoms() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const atomRadiusMin = 100;
        const atomRadiusMax = 250;
        const electronsMin = 1;
        const electronsMax = 6;

        for (let i = 0; i < numberOfAtoms; i++) {
            const radius = getRandomInt(atomRadiusMin, atomRadiusMax);
            const x = getRandomInt(radius, headerWidth - radius);
            const y = getRandomInt(radius + headerHeight, canvas.height - radius);
            const numberOfElectrons = getRandomInt(electronsMin, electronsMax);

            drawAtom(x, y, radius, numberOfElectrons);
            atoms.push({ centerX: x, centerY: y, radius: radius, numberOfElectrons: numberOfElectrons });
        }
    }

    function animateElectrons() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        atoms.forEach(atom => {
            drawAtom(atom.centerX, atom.centerY, atom.radius, atom.numberOfElectrons);
        });

        requestAnimationFrame(animateElectrons);
    }

    renderAtoms();
    animateElectrons();
});
