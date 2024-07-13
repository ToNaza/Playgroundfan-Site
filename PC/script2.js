let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.slider-container').style.transform = `translateX(${offset}%)`;
}




document.addEventListener('DOMContentLoaded', (event) => {
    const rotatingDiv = document.getElementById('rotating-div');
    let angle = 0;
    let isHovered = false;
  
    const rotateDiv = () => {
      if (!isHovered) {
        angle = angle === 0 ? 5 : -5; // Змінює кут на 10 градусів вліво або вправо
        rotatingDiv.style.transform = `rotate(${angle}deg)`;
  
        // Повернення до звичайного вигляду через 0.5 секунди
        setTimeout(() => {
          if (!isHovered) {
            rotatingDiv.style.transform = 'rotate(0deg)';
          }
        }, 500);
      }
    };
  
    const intervalId = setInterval(rotateDiv, 3000); // Інтервал 5 секунд
  
    rotatingDiv.addEventListener('mouseenter', () => {
      isHovered = true;
      rotatingDiv.classList.add('hovered');
      rotatingDiv.style.transform = 'scale(1.1)';
    });
  
    rotatingDiv.addEventListener('mouseleave', () => {
      isHovered = false;
      rotatingDiv.classList.remove('hovered');
      rotatingDiv.style.transform = 'rotate(0deg)'; // Повертає до звичайного вигляду
    });
  });


  document.addEventListener('DOMContentLoaded', (event) => {
    const secondRotatingDiv = document.getElementById('second-rotating-div');
    let angle2 = 0;
    let isHovered2 = false;
  
    const rotateSecondDiv = () => {
      if (!isHovered2) {
        angle2 = angle2 === 0 ? 5 : -5; // Змінює кут на 5 градусів вліво або вправо
        secondRotatingDiv.style.transform = `rotate(${angle2}deg)`;
  
        // Повернення до звичайного вигляду через 0.5 секунди
        setTimeout(() => {
          if (!isHovered2) {
            secondRotatingDiv.style.transform = 'rotate(0deg)';
          }
        }, 500);
      }
    };
  
    const intervalId2 = setInterval(rotateSecondDiv, 3000); // Інтервал 3 секунди
  
    secondRotatingDiv.addEventListener('mouseenter', () => {
      isHovered2 = true;
      secondRotatingDiv.classList.add('hovered');
      secondRotatingDiv.style.transform = 'scale(1.1)';
    });
  
    secondRotatingDiv.addEventListener('mouseleave', () => {
      isHovered2 = false;
      secondRotatingDiv.classList.remove('hovered');
      secondRotatingDiv.style.transform = 'rotate(0deg)'; // Повертає до звичайного вигляду
    });
  });




  function switchLanguage(langId) {
    const sections = document.querySelectorAll('.lang-section');
    sections.forEach(section => {
        if (section.id === langId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}