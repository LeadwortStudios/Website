document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.img-compare-container').forEach(function(container) {
        const after = container.querySelector('.img-compare-after');
        const afterImg = after.querySelector('img');
        const line = container.querySelector('.img-compare-line');
        const slider = container.querySelector('.img-compare-slider');

        function setWidths() {
            const containerWidth = container.offsetWidth;
            afterImg.style.width = containerWidth + 'px';
        }

		function updatePosition(value) {
			after.style.width = value + '%';
			line.style.left = value + '%';
			setWidths();
		}

        slider.addEventListener('input', function() {
            updatePosition(slider.value);
        });

        window.addEventListener('resize', setWidths);
        updatePosition(slider.value);
    });
});