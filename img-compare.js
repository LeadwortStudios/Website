document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.img-compare-container').forEach(function(container) {
        const after = container.querySelector('.img-compare-after');
        const slider = container.querySelector('.img-compare-slider');

        slider.addEventListener('input', function() {
            after.style.width = slider.value + '%';
        });
    });
});