let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav-list a');

window.addEventListener('scroll', function () {
    let header = document.querySelector('.nav');
    header.classList.toggle('rolagem', window.scrollY > 0);
});


// 1. Seleciona todas as seções e os links do menu
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; // -150 é um desconto por causa da altura do header fixo
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // Se a posição atual do scroll estiver DENTRO desta seção
        if (top >= offset && top < offset + height) {

            // Remove a classe 'active' de TODOS os links primeiro
            navLinks.forEach(links => {
                links.classList.remove('active');

                // Remove também do span se necessário, mas tirando do 'a' já resolve pelo CSS
            });

            // Adiciona a classe 'active' APENAS no link que tem o href igual ao ID desta seção
            let targetLink = document.querySelector('.nav-list a[href*=' + id + ']');
            if (targetLink) {
                targetLink.classList.add('active');
            }
        }
    });


};