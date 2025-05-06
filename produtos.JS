// Menu Mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Acessibilidade
document.getElementById('increaseFont').addEventListener('click', function() {
    document.body.classList.add('font-size-2');
    document.body.classList.remove('font-size-1');
});

document.getElementById('decreaseFont').addEventListener('click', function() {
    document.body.classList.add('font-size-1');
    document.body.classList.remove('font-size-2');
});

document.getElementById('highContrast').addEventListener('click', function() {
    document.body.classList.add('high-contrast');
});

document.getElementById('normalContrast').addEventListener('click', function() {
    document.body.classList.remove('high-contrast');
});

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // Se for um link para outra página, não faz scroll suave
        if (this.getAttribute('href').startsWith('#') && 
            window.location.pathname === new URL(this.href).pathname) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Ativar link ativo no menu durante o scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}` || 
            item.getAttribute('href').endsWith(`#${current}`)) {
            item.classList.add('active');
        }
    });
});