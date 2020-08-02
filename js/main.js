$(document).ready(function () {
    const a = 0;
    $(window).scroll( () => {
        const oTop = $('.wrap-section_3').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.count').each(function() {
            let $this = $(this);
            let countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
                },
        
                {
                duration: 1500,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
                });
            });
        }
    });  
});