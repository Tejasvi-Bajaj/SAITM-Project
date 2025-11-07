// Select the button by its class name
const buyNowBtn = document.querySelector('.buyNowBtn');

// Check if the button exists before adding the event listener
if (buyNowBtn) {
  buyNowBtn.addEventListener('click', (event) => {
    event.preventDefault(); // prevents page reload if button has a link
    alert('Under Development !!');
  });
} else {
  console.error('Buy Now button not found!');
}
