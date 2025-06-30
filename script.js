document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navlinks = document.getElementById('navlinks');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('toggle');
        navlinks.classList.toggle('show');
    });
});