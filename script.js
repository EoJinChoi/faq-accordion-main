const accordionQuestions = document.querySelectorAll(".accordion-question");

accordionQuestions.forEach(header => {
    header.addEventListener("click", () => {
        const accordionItem = header.parentElement;
        const icon = header.querySelector('.accordion-icon');

        const panelId = header.getAttribute('aria-controls');
        const panel = document.getElementById(panelId);

        accordionItem.classList.toggle('active');

        if(accordionItem.classList.contains('active')) {
            icon.src = './assets/images/icon-minus.svg';
            header.setAttribute('aria-expanded', 'true');
        } else {
            icon.src = './assets/images/icon-plus.svg';
            header.setAttribute('aria-expanded', 'false');
        }
    });
});