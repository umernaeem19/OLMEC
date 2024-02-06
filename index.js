const premiumDiv = document.querySelector(".premium-div");

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Adjust the motion effect based on cursor position
  const motionBlurX = (mouseX / window.innerWidth) * 100;
  const motionBlurY = (mouseY / window.innerHeight) * 100;

  premiumDiv.style.background = `linear-gradient(45deg, #8B4513, #634329)`;
  premiumDiv.style.backgroundSize = `${motionBlurX}% ${motionBlurY}%`;
});
function showDiv() {
    document.getElementById('myDiv').style.display = 'flex';
}

function hideDiv() {
    document.getElementById('myDiv').style.display = 'none';
}
