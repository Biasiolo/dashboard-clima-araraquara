(function ($) {
    $.fn.scrollColorChange = function (options) {
        var settings = $.extend({
            colors: [
                { name: "blue", color: "rgb(43, 174, 226)" },
                { name: "yellow", color: "rgb(177, 226, 43)" },
                { name: "white", color: "rgb(255, 255, 245)" },
                { name: "red", color: "rgb(214, 40, 40)" },
                { name: "black", color: "#080808" },
            ],

            initialColor: "black", // Adiciona uma nova opção para a cor inicial

            textColors: [ // Adicione um array de cores de texto de contraste predefinidas
                { name: "blue", color: "#66250B" },
                { name: "yellow", color: "#080808" },
                { name: "white", color: "#020827" },
                { name: "red", color: "#fdf5e6" },
                { name: "black", color: "#fff" },
            ],
        }, options);

        var currentColorIndex = settings.colors.findIndex(color => color.name === settings.initialColor) || 0;

        function changeColor() {
            currentColorIndex = (currentColorIndex + 1) % settings.colors.length;
            updateColor();
        }

        function updateColor() {
            var selectedColor = settings.colors[currentColorIndex].color;
            var selectedTextColor = settings.textColors[currentColorIndex].color;

            $("body").css({
                "background-color": selectedColor,
                "color": selectedTextColor,
            });

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
