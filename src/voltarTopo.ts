// script.ts
window.onscroll = function(): void {
    scrollFunction();
};

function scrollFunction(): void {
    const btnVoltarTopo = document.getElementById("btnVoltarTopo") as HTMLButtonElement;
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        btnVoltarTopo.style.display = "block";
    } else {
        btnVoltarTopo.style.display = "none";
    }
}

document.getElementById("btnVoltarTopo")?.addEventListener("click", (): void => {
    window.scrollTo(0, 0);
});

