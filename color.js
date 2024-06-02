// js code to wait for the DOM content to be loaded
document.addEventListener('DOMContentLoaded', () => {
   
 // Function to generate a random color in hexadecimal format
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#'; 
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  // function getRandomColor(){
  //   const r = Math.floor(math.random() *256);
  //   const g = Math.floor(math.random() *256);
  //   const b = Math.floor(math.random() *256);
  //   return `rgb(rgb${r},${g},${b})`;
  // }

  // Function to apply the random color to the color-box element
  function applyRandomColor() {
    const colorBox = document.getElementById('color-box');
    const randomColor = getRandomColor();
    colorBox.style.backgroundColor = randomColor;
  }

  // Add event listener to the button
  const changeColorBtn = document.getElementById('change-color-btn');
  changeColorBtn.addEventListener('click', applyRandomColor);
});
