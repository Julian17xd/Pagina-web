document.querySelectorAll('.nav-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        var id = this.getAttribute('href');
        var offset = 74; // Altura barra de navegación
        var target = document.querySelector(id).offsetTop - offset;

        window.scrollTo({
            top: target,
            behavior: "smooth"
        });
    });
});