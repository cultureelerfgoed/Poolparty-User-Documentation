
function openZoom(imageSrc) {
    const overlay = document.getElementById('overlay');
    const zoomImage = document.getElementById('zoomImage');
    
    zoomImage.src = imageSrc;  // Dynamically set the image source.
    overlay.style.display = 'flex';
  }
  
  function closeZoom() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
  }
  

