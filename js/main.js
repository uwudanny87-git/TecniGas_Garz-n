const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

if(menuToggle){

    menuToggle.addEventListener("click", ()=>{

        navbar.classList.toggle("active");

    });

}
const elementos =
document.querySelectorAll(
'.servicio, .producto, .ventaja, .card'
);

const observer =
new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add(
                'mostrar'
            );

        }

    });

});

elementos.forEach((el)=>{

    el.classList.add('oculto');

    observer.observe(el);

});