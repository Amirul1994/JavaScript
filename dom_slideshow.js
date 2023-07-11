// Write a JavaScript program to create a slideshow that changes 
// the displayed image when a next or previous button is clicked. 



const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const images = document.querySelectorAll(".slideshow-image");
    let currentIndex = 0; 

    nextButton.addEventListener("click", showNextImage);
    prevButton.addEventListener("click", showPreviousImage);
    

    function showImage(index) {
      if (index < 0) {
        currentIndex = images.length - 1;
      } else if (index >= images.length) {
        currentIndex = 0;
      }

      //images.forEach((image, i) => { 
        images.forEach(function(image, i) {
        if (i === currentIndex) {
          image.style.display = "block";
        } else {
          image.style.display = "none";
        }
      });
    }

    function showNextImage() {
      currentIndex++;
      showImage(currentIndex);
    }

    function showPreviousImage() {
      currentIndex--;
      showImage(currentIndex);
    }
    
    
    // Show the initial image
    showImage(currentIndex);