document.addEventListener('DOMContentLoaded', () => {
    const main = document.getElementById('main-content');
    const sections = main.querySelectorAll('section');
    let currentSectionIndex = 0;
    let isScrolling = false;

    function scrollToSection(index) {
        if (index >= 0 && index < sections.length) {
            isScrolling = true;
            sections[index].scrollIntoView({ behavior: 'smooth' });
            currentSectionIndex = index;
            setTimeout(() => {
                isScrolling = false;
            }, 1000); // Adjust this value based on your scroll duration
        }
    }

    window.addEventListener('wheel', (event) => {
        if (isScrolling) return;

        if (event.deltaY > 0) {
            // Scrolling down
            scrollToSection(currentSectionIndex + 1);
        } else {
            // Scrolling up
            scrollToSection(currentSectionIndex - 1);
        }
    });
});