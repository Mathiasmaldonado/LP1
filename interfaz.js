// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    function crearBoton(id, texto, color, accion) {
      const boton = document.createElement("button");//cosas que no uso pero las agg por las dudas
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
  imagen.src = "Captura de pantalla 2025-02-20 180714.png";
  imagen.alt = "Cargando...";
  imagen.style.maxWidth = "700px"; // Ajusta el tamaño de la imagen

        // Agregar la imagen al overlay
        overlay.appendChild(imagen);
        
        
        // Agregar el overlay al body
        document.body.appendChild(overlay);

        const audio = new Audio("resident-evil-4-a.mp3"); // archivo de audio
        audio.play().catch(function(error) {
        });

        // Después de 3 segundos, redirigir a la página
        setTimeout(function() {
          window.location.href = ""; //destino
        }, 5000);
      });
      
    });
  
    // Botón 2 para la patalla de cargar
    crearBoton("boton2", "Cargar", "black", function() {
      console.log("Botón 2 clic");
      // Aquí agrega la función personalizada para el Botón 2
      const sonido= new Audio("welcome.mp3");
      sonido.play().catch(error => {
        console.error("no se pudo reproducir el sonido", error);
      })
      
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
imagen.src = "Captura de pantalla 2025-02-20 181340.png";
imagen.style.maxWidth = "700px";

      // Agregar la imagen al overlay
      overlay.appendChild(imagen);
      
      
      // Agregar el overlay al body
      document.body.appendChild(overlay);
      
      document.addEventListener("keyup", function(e) {
        if (e.key === "Escape") {
          // Vuelve al inicio recargando la página LOKURAAA
          window.location.reload();
        }
      });
    });
  
    // Botón 3 para los marcadores
    crearBoton("boton3", "Marcadores", "black", function() {
      console.log("Botón 3 clic");
      // Aquí agrega la función personalizada para el Botón 3.
      let mensajeDiv = document.getElementById("mensaje"); // crear el mensaje parra el boton :)
      if (!mensajeDiv){
        mensajeDiv = document.createElement("div");
        mensajeDiv.id= "mensaje";
        mensajeDiv.style.position = "fixed";
      mensajeDiv.style.bottom = "10px";
      mensajeDiv.style.left = "50%";
      mensajeDiv.style.transform = "translateX(-50%)";
      mensajeDiv.style.backgroundColor = "black";
      mensajeDiv.style.padding = "10px 10px";
      mensajeDiv.style.borderRadius = "5px";
      mensajeDiv.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.2)";
      mensajeDiv.style.fontFamily = "Arial, sans-serif";
      mensajeDiv.style.textAlign = "center";
      mensajeDiv.style.color = "white"

      document.body.appendChild(mensajeDiv)
      }
      mensajeDiv.textContent = "no conectado a internet"

      setTimeout(function(){
        if (mensajeDiv){
          mensajeDiv.remove();
        }
      }, 5000);
    });
  
    // Botón 4 para los ajustes
    crearBoton("boton4", "Ayuda y Opciones", "black", function() {
      console.log("Botón 4 clic");
      // Aquí agrega la función personalizada para el Botón 4.
      window.location.href= "http://127.0.0.1:5500/zoe/index.html"
    });
  
    // Botón 5  extras
    crearBoton("boton5", "Extras", "black", function() {
      console.log("Botón 5 clic");
      // Aquí agrega la función personalizada para el Botón 5.
      const sonido= new Audio("disparo-directo.mp3");
      sonido.play().catch(error => {
        console.error("no se pudo reproducir el sonido", error);
      })
      
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
imagen.src = "Captura de pantalla 2025-02-20 185155.png";
imagen.style.maxWidth = "650px";

      // Agregar la imagen al overlay
      overlay.appendChild(imagen);
      
      
      // Agregar el overlay al body
      document.body.appendChild(overlay);
  
      document.addEventListener("keyup", function(e) {
        if (e.key === "Escape") {
          // Vuelve al inicio recargando la página LOKURAAA
          window.location.reload();
        }
      });
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
        window.closed();
        
      });
 
});