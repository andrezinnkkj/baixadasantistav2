function scrollBanner() {
    scrollPos = window.scrollY
    var headerText = document.querySelector('.header-paralax h1')
    headerText.style.transform = "translateY(" + -(scrollPos / 3) + "px)";
    headerText.style.opacity = 1-(scrollPos/400);
    
}

window.addEventListener('scroll', scrollBanner)
window.addEventListener('scroll', scrollBanner);

const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");

menuBtn.addEventListener("click", () => {
    sidebar.classList.add("ativo");
    overlay.classList.add("ativo");
});

function fecharMenu() {
    sidebar.classList.remove("ativo");
    overlay.classList.remove("ativo");
}
closeBtn.addEventListener("click", fecharMenu);
overlay.addEventListener("click", fecharMenu);

const contadores = document.querySelectorAll(".contador");
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
     if (entrada.isIntersecting) {
const elemento = entrada.target;
const valorFinal = Number(elemento.dataset.valor);
const decimais = Number(elemento.dataset.decimais) || 0;
const agrupar = elemento.dataset.agrupar !== "false";
const duracao = 1000;
const inicio = performance.now();

     function atualizar(tempo) {
const tempoPassado = Math.min((tempo - inicio) / duracao, 1);
const progresso = 1 - Math.pow(1 - tempoPassado, 3);
const valorAtual = valorFinal * progresso;

    elemento.textContent = valorAtual.toLocaleString("pt-BR", {
        minimumFractionDigits: decimais,
        maximumFractionDigits: decimais,
        useGrouping: agrupar
                });
                if (tempoPassado < 1) {
                    requestAnimationFrame(atualizar);
                } else {
    elemento.textContent = valorFinal.toLocaleString("pt-BR", {
        minimumFractionDigits: decimais,
        maximumFractionDigits: decimais,
        useGrouping: agrupar
                    });
                }
            }
        requestAnimationFrame(atualizar);
        observador.unobserve(elemento);
        }
    });
});
contadores.forEach((contador) => {
    observador.observe(contador);
});
