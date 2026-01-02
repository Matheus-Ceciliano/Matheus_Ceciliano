// Seletores principais
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-list a');
const header = document.querySelector('.nav');

// Scroll único e estável
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    // Efeito de rolagem no header
    header.classList.toggle('rolagem', scrollTop > 0);

    sections.forEach(section => {
        const offset = section.offsetTop - 150; // ajuste pela altura do header
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollTop >= offset && scrollTop < offset + height) {

            // Remove active de todos
            navLinks.forEach(link => link.classList.remove('active'));

            // Adiciona active no link correto
            const currentLink = document.querySelector(
                `.nav-list a[href*="${id}"]`
            );

            if (currentLink) {
                currentLink.classList.add('active');
            }
        }
    });
});
