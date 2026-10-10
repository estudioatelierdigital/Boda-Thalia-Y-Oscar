/*
  NOTA SOBRE EDICIÓN (config.js):
  Este es el archivo principal de datos para la boda de Thalia y Oscar.
  Aquí puedes editar fácilmente:
  - Textos (nombres, fechas, mensajes).
  - Enlaces de Google Maps y WhatsApp.
  - Rutas de la imagen principal.
  Al modificar este archivo, el diseño HTML se actualizará automáticamente.
*/

const CONFIG = {
  couple: "Thalía & Oscar",
  date: "2027-01-16T13:00:00", // Formato ISO para el contador (16 Ene 2027, 1:00 PM)
  dateString: "16 de Enero de 2027",
  
  heroImage: "assets/img/e33b751c-df5f-40ce-a09f-727c60828e28.jpeg", // Asegúrate de colocar la foto principal aquí

  parents: {
    bride: {
      mom: "Ma. Guadalupe Badillo Cernas",
      dad: "Roberto Caporal Vidal"
    },
    groom: {
      mom: "Maria de la luz Esperanza Mauricio Magaña",
      dad: "Ignacio Bernal Gomora †"
    }
  },

  specialNote: "Presentaremos nuestro amor ante Dios y deseamos compartir la alegría de nuestra unión en matrimonio con nuestros seres queridos.",

  locations: {
    ceremony: {
      name: "Iglesia Santuario de Tlatenango",
      address: "Av. Emiliano Zapata 304, Tlaltenango, Cuernavaca, Morelos",
      time: "1:00 PM",
      mapUrl: "https://maps.app.goo.gl/Eywf1csPQH1GD2eYA"
    },
    reception: {
      name: "Salon Arecas / Salon AV. Subida de Chalma N° 2000",
      address: "Cuernavaca, Morelos",
      time: "3:00 PM",
      mapUrl: "https://maps.app.goo.gl/1UFNsz29J4ixmpyX9"
    }
  },

  dressCode: "De Etiqueta",

  rsvp: {
    phone: "525634760972",
    message: "¡Hola Thalía y Oscar! Confirmo mi asistencia a su boda este 16 de enero."
  }
  
};