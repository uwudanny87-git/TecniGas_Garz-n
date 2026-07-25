const imagenes =
document.querySelectorAll(
".contenedor-galeria img"
);

const modal =
document.querySelector(".modal");

const modalImg =
document.querySelector(".modal-img");

const cerrar =
document.querySelector(".cerrar");

imagenes.forEach(img=>{

    img.addEventListener("click",()=>{

        modal.style.display="flex";

        modalImg.src=img.src;

    });

});

cerrar.addEventListener("click",()=>{

    modal.style.display="none";

});