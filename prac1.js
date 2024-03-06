
        let clickCount = 0;
        const buttonText = ["Are you sure?", "Sure na sure?", "Super sure?"];

        function clickNo() {
            document.querySelector("#no").innerHTML = buttonText[clickCount % buttonText.length];
            clickCount++;
        
            // document.querySelector("#viewpic").innerHTML = imagesElements[imageIndex % imagesElements.length].outerHTML;
            // imageIndex++;  images sad view
          
            const yesButton = document.getElementById("yes");
            const currentHeight = parseInt(window.getComputedStyle(yesButton).height);
            const currentWidth = parseInt(window.getComputedStyle(yesButton).width);
            const currentFontSize = parseInt(window.getComputedStyle(yesButton).fontSize)

            const scaleFactor = 1.5;
            const newHeight = currentHeight * scaleFactor;
            const newWidth = currentWidth * scaleFactor;
            const newFontSize = currentFontSize * scaleFactor;

            yesButton.style.backgroundColor = "rgb(25, 214, 25);";
            yesButton.style.height = newHeight + "px";
            yesButton.style.width = newWidth + "px";
            yesButton.style.fontSize = newFontSize + "px";
        }

        function yesClick() {

            document.querySelector("#rose1").style.display = "none";
            document.querySelector("#will").style.display = "none";
            document.querySelector("#be").style.display = "none";
            document.querySelector("#yes").style.display = "none";
            document.querySelector("#no").style.display = "none";
            document.querySelector("#girl").style.display = "none";

            
        }