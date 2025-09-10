// Dados das armaduras
const armors = [
  {
    name: "Mark I",
    description: "Construída em uma caverna com uma caixa de restos, esta armadura provou que Tony Stark poderia construir qualquer coisa.",
    image: "img/Iron_Man_Armor_Model_1-.png",
    stats: {
      potencia: "80%",
      armamento: "60%",
      defesa: "40%"
    }
  },
  {
    name: "Mark III",
    description: "Primeira armadura vermelha e dourada clássica. Trouxe maior mobilidade e armas mais poderosas.",
    image: "img/Iron_Man_Armor_MK_III-.png",
    stats: {
      potencia: "90%",
      armamento: "85%",
      defesa: "70%"
    }
  },
  {
    name: "Mark VII",
    description: "Armadura automatizada que pode ser equipada em segundos durante a batalha.",
    image: "img/IronManMK_VII-.png",
    stats: {
      potencia: "95%",
      armamento: "90%",
      defesa: "80%"
    }
  },
  {
    name: "Mark XLII",
    description: "Modelo modular, com partes que voam individualmente e se conectam ao corpo de Tony.",
    image: "img/ironmanMK_XLII-.png",
    stats: {
      potencia: "92%",
      armamento: "88%",
      defesa: "75%"
    }
  },
  {
    name: "Mark L",
    description: "Armadura feita de nanotecnologia, extremamente flexível e adaptável em combate.",
    image: "img/ironmanMK_L-.png",
    stats: {
      potencia: "97%",
      armamento: "95%",
      defesa: "85%"
    }
  },
  {
    name: "Mark LXXXV",
    description: "Última armadura de Tony Stark, usada em Ultimato. Combina todo o conhecimento acumulado.",
    image: "img/ironmanMK_LXXXV-.png",
    stats: {
      potencia: "100%",
      armamento: "98%",
      defesa: "90%"
    }
  }
];

// ---------- Modal ----------
function openModal(index) {
  const armor = armors[index];
  const modal = document.getElementById("armorModal");
  const modalBody = document.getElementById("modalBody");

  modalBody.innerHTML = `
    <div class="modal-image">
      <img src="${armor.image}" alt="${armor.name}">
    </div>
    <div class="modal-info">
      <h2 class="modal-title">${armor.name}</h2>
      <p>${armor.description}</p>
      <div class="stats">
        <div class="stat">⚡ Potência: ${armor.stats.potencia}</div>
        <div class="stat">💥 Armamento: ${armor.stats.armamento}</div>
        <div class="stat">🛡 Defesa: ${armor.stats.defesa}</div>
      </div>
    </div>
  `;

  modal.style.display = "flex";

  // Fechar com ESC
  document.addEventListener("keydown", closeModalOnEsc);
}

function closeModal() {
  document.getElementById("armorModal").style.display = "none";
  document.removeEventListener("keydown", closeModalOnEsc);
}

function closeModalOnEsc(event) {
  if (event.key === "Escape") closeModal();
}

function setupModalClose() {
  const modal = document.getElementById("armorModal");
  if (modal) {
    modal.addEventListener("click", function (event) {
      if (event.target === modal) closeModal();
    });
  }
}

// ---------- Partículas ----------
function createParticles() {
  const particlesContainer = document.getElementById("particles");
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;

    particle.style.animation = `
      moveParticle ${Math.random() * 3 + 2}s infinite alternate
    `;

    particlesContainer.appendChild(particle);
  }
}

// ---------- Scroll suave ----------
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: "smooth"
  });
}

// ---------- Animação texto ----------
function typeWriterEffect() {
  const tagline = document.querySelector(".tagline");
  if (!tagline) return;

  const text = tagline.textContent;
  tagline.textContent = "";

  let i = 0;
  const speed = 50;

  function type() {
    if (i < text.length) {
      tagline.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  setTimeout(type, 1000);
}

// ---------- Scroll Reveal ----------
function setupScrollReveal() {
  const revealElements = document.querySelectorAll(
    ".event-content, .fact-card, .about-image, .about-text"
  );

  function checkReveal() {
    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        element.classList.add("active");
      }
    });
  }

  checkReveal();
  window.addEventListener("scroll", checkReveal);
}

// ---------- Animações ----------
function addAnimationClasses() {
  document.querySelectorAll(".event-content, .fact-card").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });

  document.querySelectorAll(".about-image, .about-text").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateX(-30px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });

  const css = `
    .event-content.active, .fact-card.active {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
    .about-image.active, .about-text.active {
      opacity: 1 !important;
      transform: translateX(0) !important;
    }
    .about-text.active {
      transition-delay: 0.2s;
    }
  `;

  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);
}

// ---------- Inicialização ----------
document.addEventListener("DOMContentLoaded", function () {
  createParticles();
  typeWriterEffect();
  setupModalClose();
  addAnimationClasses();
  setupScrollReveal();

  // Links nav
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      scrollToSection(targetId);
    });
  });

  // Botão scroll down
  const scrollDownBtn = document.querySelector(".scroll-down");
  if (scrollDownBtn) {
    scrollDownBtn.addEventListener("click", function () {
      scrollToSection("about");
    });
  }

  // Hover título
  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle) {
    heroTitle.addEventListener("mouseenter", function () {
      this.style.textShadow = "0 0 8px #fff, 0 0 20px var(--iron-red)";
      this.style.letterSpacing = "4px";
    });

    heroTitle.addEventListener("mouseleave", function () {
      this.style.textShadow = "none";
      this.style.letterSpacing = "2px";
    });
  }
});

// ---------- Ajuste partículas em telas menores ----------
window.addEventListener("resize", function () {
  const particles = document.querySelectorAll(".particle");
  if (window.innerWidth < 768) {
    particles.forEach((particle) => {
      particle.style.animationDuration = `${Math.random() * 2 + 1}s`;
    });
  }
});
