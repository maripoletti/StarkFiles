// Dados das armaduras
const armors = [
    {
        name: "Mark I",
        image: "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/5/5f/Iron-Man-Armor-Mark-I-Display.png/revision/latest",
        description: "Construída em uma caverna com uma caixa de restos, esta armadura provou que Tony Stark poderia construir qualquer coisa."
    },
    {
        name: "Mark III",
        image: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/a/a4/Mark_III_Exo-Suit.png/revision/latest",
        description: "A primeira armadura a apresentar o icônico esquema de cores vermelho e dourado. Equipada com repulsores, mísseis e um unibeam."
    },
    {
        name: "Mark VII",
        image: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/4/45/Mk7.png/revision/latest",
        description: "Armadura de desdobramento rápido usada na Batalha de Nova York, equipada com lasers e maior poder de fogo."
    },
    {
        name: "Mark XLII",
        image: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/4/47/Armor_mk42.png/revision/latest",
        description: "A armadura autônoma que pode ser controlada remotamente. Conhecida como o 'Prodígio'."
    },
    {
        name: "Mark L",
        image: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/a/a3/Armor_mk50.png/revision/latest",
        description: "A armadura 'Bleeding Edge'. Utilizando nanotecnologia, esta armadura pode se formar em torno de Tony instantaneamente e criar uma variedade de armas."
    },
    {
        name: "Mark LXXXV",
        image: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/f/f6/Endgame_Armor.png/revision/latest",
        description: "A armadura final. Integrada com nanotecnologia avançada, foi projetada para interagir com as Joias do Infinito."
    }
];

// Função para criar partículas animadas
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Posição aleatória
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Adiciona animação
        particle.style.animation = `
            moveParticle ${Math.random() * 3 + 2}s infinite alternate
        `;
        
        particlesContainer.appendChild(particle);
    }
}

// Função para rolar suavemente para uma seção
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Função para abrir o modal com detalhes da armadura
function openModal(armorIndex) {
    const armor = armors[armorIndex];
    const modal = document.getElementById('armorModal');
    const modalBody = document.getElementById('modalBody');
    
    // Gera estatísticas aleatórias
    const power = Math.floor(Math.random() * 50) + 50;
    const weapons = Math.floor(Math.random() * 50) + 50;
    const defense = Math.floor(Math.random() * 50) + 50;
    
    modalBody.innerHTML = `
        <div class="modal-image">
            <img src="${armor.image}" alt="${armor.name}">
        </div>
        <div class="modal-info">
            <h2 class="modal-title">${armor.name}</h2>
            <p>${armor.description}</p>
            
            <div class="stats">
                <div class="stat">
                    <i class="fas fa-tachometer-alt" style="color: #d4af37;"></i>
                    <span>Potência: ${power}%</span>
                </div>
                <div class="stat">
                    <i class="fas fa-bolt" style="color: #c42b2b;"></i>
                    <span>Armamento: ${weapons}%</span>
                </div>
                <div class="stat">
                    <i class="fas fa-shield-alt" style="color: #4facfe;"></i>
                    <span>Defesa: ${defense}%</span>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'flex';
    
    // Adiciona evento para fechar modal com ESC
    document.addEventListener('keydown', closeModalOnEsc);
}

// Função para fechar o modal com a tecla ESC
function closeModalOnEsc(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
}

// Função para fechar o modal
function closeModal() {
    document.getElementById('armorModal').style.display = 'none';
    
    // Remove evento de teclado
    document.removeEventListener('keydown', closeModalOnEsc);
}

// Fechar modal ao clicar fora do conteúdo
function setupModalClose() {
    const modal = document.getElementById('armorModal');
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });
    }
}

// Animação de digitação para o tagline
function typeWriterEffect() {
    const tagline = document.querySelector('.tagline');
    if (!tagline) return;
    
    const text = tagline.textContent;
    tagline.textContent = '';
    
    let i = 0;
    const speed = 50;
    
    function type() {
        if (i < text.length) {
            tagline.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    // Inicia a animação após um pequeno delay
    setTimeout(type, 1000);
}

// Efeito de revelação ao scroll
function setupScrollReveal() {
    const revealElements = document.querySelectorAll('.event-content, .fact-card, .about-image, .about-text');
    
    function checkReveal() {
        const windowHeight = window.innerHeight;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    }
    
    // Verifica a posição inicial
    checkReveal();
    
    // Adiciona evento de scroll
    window.addEventListener('scroll', checkReveal);
}

// Adiciona classe para animação CSS
function addAnimationClasses() {
    // Adiciona classes para animação
    document.querySelectorAll('.event-content, .fact-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    document.querySelectorAll('.about-image, .about-text').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(-30px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Adiciona classe active para elementos que devem ser animados
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
    
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
}

// Inicializar a página
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    typeWriterEffect();
    setupModalClose();
    addAnimationClasses();
    setupScrollReveal();
    
    // Adicionar evento de clique para os links de navegação
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
    
    // Adiciona evento para o botão de scroll down
    const scrollDownBtn = document.querySelector('.scroll-down');
    if (scrollDownBtn) {
        scrollDownBtn.addEventListener('click', function() {
            scrollToSection('about');
        });
    }
    
    // Adiciona efeito de hover dinâmico no título
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 8px #fff, 0 0 20px var(--iron-red)';
            this.style.letterSpacing = '4px';
        });
        
        heroTitle.addEventListener('mouseleave', function() {
            this.style.textShadow = 'none';
            this.style.letterSpacing = '2px';
        });
    }
});

// Adiciona um ouvinte de evento para redimensionamento da janela
window.addEventListener('resize', function() {
    // Ajusta a animação de partículas em dispositivos móveis
    const particles = document.querySelectorAll('.particle');
    if (window.innerWidth < 768) {
        particles.forEach(particle => {
            particle.style.animationDuration = `${Math.random() * 2 + 1}s`;
        });
    }
});