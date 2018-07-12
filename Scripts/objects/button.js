/* Custom JS goes here */
/* File name:           button.js
Author's name:          Riaz Ahmed
Student ID:             300759573
file description:       contains Javascript Code      */

let objects;
(function(objects){

    class Button extends Image {

        constructor(source = "", width = 0, height = 0) {
            super(width, height);

            this.src = source;

            this.addEventListener("mouseover", function(){
                this.style.opacity = 0.7; // sets the alpha transparency to 30%;
            });

            this.addEventListener("mouseout", function(){
                this.style.opacity = 1.0; // sets the alpha transparency to 0%;
            });
        }
    }

    objects.Button = Button;
})(objects || (objects = {}));