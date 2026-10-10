/*
  NOTA SOBRE EDICIÓN (script.js):
  Este archivo contiene toda la lógica y funcionalidad de la invitación.
  Lee los datos de config.js automáticamente, por lo que rara vez necesitarás
  editar este archivo a menos que quieras cambiar cómo funcionan las animaciones o la música.
*/

document.addEventListener("DOMContentLoaded", () => {
  
  // =========================================
  // 1. INYECCIÓN DE DATOS DESDE CONFIG.JS
  // =========================================
  
  // Textos Generales
  document.getElementById('coupleIntro').textContent = CONFIG.couple;
  document.getElementById('introDate').textContent = CONFIG.dateString;
  document.getElementById('coupleNames').textContent = CONFIG.couple;
  
  // Imagen de Portada
  document.getElementById('heroImage').src = CONFIG.heroImage;

  // Padres y Padrinos
  document.getElementById('momBride').textContent = CONFIG.parents.bride.mom;
  document.getElementById('dadBride').textContent = CONFIG.parents.bride.dad;
  document.getElementById('momGroom').textContent = CONFIG.parents.groom.mom;
  document.getElementById('dadGroom').textContent = CONFIG.parents.groom.dad;
  
  // Nota Especial
  document.getElementById('specialNote').textContent = CONFIG.specialNote;

  // Ceremonia
  document.getElementById('ceremonyTime').textContent = CONFIG.locations.ceremony.time;
  document.getElementById('ceremonyPlace').innerHTML = `<strong>${CONFIG.locations.ceremony.name}</strong><br>${CONFIG.locations.ceremony.address}`;
  document.getElementById('ceremonyMapBtn').href = CONFIG.locations.ceremony.mapUrl;

  // Recepción
  document.getElementById('receptionTime').textContent = CONFIG.locations.reception.time;
  document.getElementById('receptionPlace').innerHTML = `<strong>${CONFIG.locations.reception.name}</strong><br>${CONFIG.locations.reception.address}`;
  document.getElementById('receptionMapBtn').href = CONFIG.locations.reception.mapUrl;

  // Código de Vestimenta
  document.getElementById('dressCodeText').textContent = CONFIG.dressCode;

  // WhatsApp RSVP
  const waMessage = encodeURIComponent(CONFIG.rsvp.message);
  const waUrl = `https://wa.me/${CONFIG.rsvp.phone}?text=${waMessage}`;
  document.getElementById('whatsappButton').href = waUrl;


// =========================================
  // 2. PANTALLA DE INICIO Y MÚSICA
  // =========================================
  const introScreen = document.getElementById('intro');
  const openBtn = document.getElementById('openInvitation');
  const backgroundMusic = document.getElementById('backgroundMusic');
  const musicButton = document.getElementById('musicButton');
  const musicIcon = musicButton.querySelector('i');
  
  let isPlaying = false;

  // BLOQUEAR EL SCROLL AL CARGAR LA PÁGINA
  document.body.style.overflow = 'hidden';

  // Al hacer clic en "Abrir invitación"
  openBtn.addEventListener('click', () => {
    
    // LIBERAR EL SCROLL
    document.body.style.overflow = 'auto';
    
    // Ocultar pantalla de intro
    introScreen.classList.add('hidden');
    // Eliminar del DOM después de la transición
    setTimeout(() => {
      introScreen.style.display = 'none';
    }, 800);

    // Intentar reproducir música
    backgroundMusic.play().then(() => {
      isPlaying = true;
      musicIcon.classList.remove('fa-volume-xmark');
      musicIcon.classList.add('fa-volume-high');
    }).catch((error) => {
      console.log("El navegador bloqueó la reproducción automática de audio.", error);
    });
  });

  // Control manual del botón de música
  musicButton.addEventListener('click', () => {
    if (isPlaying) {
      backgroundMusic.pause();
      musicIcon.classList.remove('fa-volume-high');
      musicIcon.classList.add('fa-volume-xmark');
    } else {
      backgroundMusic.play();
      musicIcon.classList.remove('fa-volume-xmark');
      musicIcon.classList.add('fa-volume-high');
    }
    isPlaying = !isPlaying;
  });


  // =========================================
  // 3. CONTADOR REGRESIVO
  // =========================================
  const countDownDate = new Date(CONFIG.date).getTime();
  
  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance < 0) {
      clearInterval(timer);
      document.getElementById("days").textContent = "00";
      document.getElementById("hours").textContent = "00";
      document.getElementById("minutes").textContent = "00";
      document.getElementById("seconds").textContent = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Formatear a 2 dígitos
    document.getElementById("days").textContent = days.toString().padStart(2, '0');
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
  }, 1000);


  // =========================================
  // 4. ANIMACIONES AL HACER SCROLL (REVEAL)
  // =========================================
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    root: null,
    threshold: 0.15 // Se activa cuando el 15% del elemento es visible
  });

  revealElements.forEach(el => revealObserver.observe(el));

});