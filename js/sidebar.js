const checkbox = document.querySelector("#menu-hamburguer");

checkbox.addEventListener("change", function() {
    const titleElements = document.querySelectorAll('.sub-div-sidebar h2');
    const paragraphElements = document.querySelectorAll('.sub-div-sidebar div p');

    if (this.checked) {
        titleElements.forEach(title => {
          title.style.display = 'none';
        });
        paragraphElements.forEach(paragraph => {
          paragraph.style.display = 'none';
        });
      } else {
        titleElements.forEach(title => {
          title.style.display = 'block';
        });
        paragraphElements.forEach(paragraph => {
          paragraph.style.display = 'block';
        });
      }

});