var main = function() {
    $('.more-btn').on('click', () => {
        $(event.currentTarget).siblings('.more-menu').toggle();
    });

    $('.share').on('click', () => {
        $(event.currentTarget).siblings('.share-menu').toggle();
    });

    $('.notification').on('click', () => {
        $(event.currentTarget).toggleClass('active');

    });
};

$(document).ready(main);