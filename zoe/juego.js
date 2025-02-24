const opciones = {
    resolucion: ["1280x720", "1600x900", "1920x1080", "2560x1440"],
    pantalla: ["SÍ", "NO"],
    frecuencia: ["30 FPS", "60 FPS", "120 FPS"],
    suavizado: ["OFF", "X2", "X4", "X8"],
    desenfoque: ["SÍ", "NO"],
    sombras: ["BAJA", "MEDIA", "ALTA"],
    texturas: ["HD", "FULL HD", "ULTRA"]
};

const indices = { resolucion: 0, pantalla: 0, frecuencia: 0, suavizado: 0, desenfoque: 0, sombras: 0, texturas: 0 };

function actualizar(id) {
    document.getElementById(id).textContent = `< ${opciones[id][indices[id]]} >`;
}

document.querySelectorAll(".seleccion").forEach(el => {
    el.addEventListener("click", function () {
        const id = this.id;
        indices[id] = (indices[id] + 1) % opciones[id].length;
        actualizar(id);
    });
});

Object.keys(opciones).forEach(actualizar);