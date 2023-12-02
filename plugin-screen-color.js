(function ($) {
    $.fn.scrollColorChange = function (options) {
        var settings = $.extend({
            colors: [
                { name: "blue", color: "rgb(43, 174, 226)" },
                { name: "green", color: "rgb(43, 226, 113)" },
                { name: "yellow", color: "rgb(177, 226, 43)" },
                { name: "purple", color: "rgb(159, 43, 226)" },
                { name: "red", color: "rgb(214, 40, 40)" },
                { name: "black", color: "#080808" },
            ],
            initialColor: "yellow", // Adiciona uma nova opção para a cor inicial

            textColors: [ // Add an array of contrasting text colors
                { name: "blueText", color: "#66250B" }, // Contrast for blue
                { name: "greenText", color: "#A60D2C" }, // Contrast for green
                { name: "yellowText", color: "#080808" }, // Contrast for yellow
                { name: "purpleText", color: "#020827" }, // Contrast for purple
                { name: "redText", color: "#D9FEBE" }, // Contrast for black
                { name: "blackText", color: "#fff" }, // Contrast for black
            ]
        }, options);

        // Encontrar o índice da cor inicial
        var initialColorIndex = settings.colors.findIndex(color => color.name === settings.initialColor);

        // Inicia com a cor inicial ou, se não for encontrada, com a primeira cor
        var currentColorIndex = (initialColorIndex !== -1) ? initialColorIndex : 0;

        function changeColor() {
            currentColorIndex = (currentColorIndex + 1) % settings.colors.length;
            updateColor();
        }



        function updateColor() {
            var selectedColor = settings.colors[currentColorIndex].color;
            var selectedTextColor = settings.textColors[currentColorIndex].color;
            $("body").css({
                "background-color": selectedColor,
                "color": selectedTextColor // Set the contrasting text color
            });

            var textColor = getContrastYIQ(selectedColor);
            $("body").css("color", textColor); // Set text color to ensure contrast

            // Adiciona a classe 'rotacionar' ao display
            $(".scroll-container").addClass("rotacionar");

            // Remove a classe 'rotacionar' após 1 segundo
            setTimeout(function () {
                $(".scroll-container").removeClass("rotacionar");
            }, 1000);
        }

        return this.each(function () {
            var $this = $(this);

            $this.css({
                fontSize: "12px",
                margin: "3px",
                cursor: "pointer",
                border: "1px solid white",
                borderRadius: "5px",
                transition: "background-color 0.3s, transform 0.3s",
            });

            $this.on("click", function () {
                changeColor();
            });

            $(document).keydown(function (e) {
                if (e.which === 40) {
                    changeColor();
                }
            });

            // Inicia com a cor inicial
            updateColor();
        });
    };
})(jQuery);
