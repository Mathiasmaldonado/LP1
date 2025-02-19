// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    function crearBoton(id, texto, color, accion) {
      const boton = document.createElement("button");
      boton.id = id;
      boton.textContent = texto;
      boton.style.backgroundColor = color;
      boton.classList.add("custom-button");
      boton.addEventListener("click", accion);
      document.body.appendChild(boton);
    }
  
    // Agregar estilo para los botones (todos)
    const estilo = document.createElement("style");
    estilo.textContent = `
      .custom-button {
        margin: 10px;
        padding: 10px 20px;
        color: #fff;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
      }
    `;
    document.head.appendChild(estilo);
  
    // los 6 botones individuales con funciones de clic
  
    // Botón 1 para la nueva partida
    crearBoton("boton1", "Nueva Partida", "black", function() {
      console.log("Botón 1 clic");
      //agregar la función personalizada para el Botón 1.
      document.getElementById("boton1").addEventListener("click", function() {
        // Crear el overlay de carga
        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.backgroundColor = "black";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = "1000";

        const imagen = document.createElement("img");
  imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_zc0loOAUf2qp9G_vulXGQUKXCA6pTdJEug&s";
  imagen.alt = "Cargando...";
  imagen.style.maxWidth = "1500px"; // Ajusta el tamaño de la imagen posd: no se puede agrandar mas :(

        // Agregar la imagen al overlay
        overlay.appendChild(imagen);
        
        
        // Agregar el overlay al body
        document.body.appendChild(overlay);

        const audio = new Audio("resident-evil-4-a.mp3"); // archivo de audio
        audio.play().catch(function(error) {
        });

        // Después de 3 segundos, redirigir a la página
        setTimeout(function() {
          window.location.href = "http://127.0.0.1:5500/interfaz.html"; //destino
        }, 5000);
      });
      
    });
  
    // Botón 2 para la patalla de cargar
    crearBoton("boton2", "Cargar", "black", function() {
      console.log("Botón 2 clic");
      // Aquí agrega la función personalizada para el Botón 2
      window.location.href = "https://i.ytimg.com/vi/HQyhmFimhlM/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgWShNMA8=&rs=AOn4CLBRIPuHL4kZmiR0q8zKvmMIk9fCQg"
    
    });
  
    // Botón 3 para los marcadores
    crearBoton("boton3", "Marcadores", "black", function() {
      console.log("Botón 3 clic");
      // Aquí agrega la función personalizada para el Botón 3.
    });
  
    // Botón 4 para los ajustes
    crearBoton("boton4", "Ayuda y Opciones", "black", function() {
      console.log("Botón 4 clic");
      // Aquí agrega la función personalizada para el Botón 4.
    });
  
    // Botón 5  extras
    crearBoton("boton5", "Extras", "black", function() {
      console.log("Botón 5 clic");
      // Aquí agrega la función personalizada para el Botón 5.
      const imagen = document.createElement("img");
      window.location.href = "https://cloudfront-eu-central-1.images.arcpublishing.com/diarioas/NTD3CQLJJREKHIMDIIQMFTLXME.png"
  
    });
  
    // Botón 6 creditos
    crearBoton("boton6", "Creditos", "black", function() {
      console.log("Botón 6 clic");
      // Aquí agrega la función personalizada para el Botón 6.
    window.location.href = "http://127.0.0.1:5500/creditos.html";

  
    });

    // Botón 7 salir
    crearBoton("boton7", "Salir", "black", function() {
        console.log("Botón 7 clic");
        // Aquí agrega la función personalizada para el Botón 6.
        // Ejemplo: window.location.href = "https://ejemplo.com";
      });
 
});