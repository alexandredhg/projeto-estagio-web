var _a;
// script.ts
window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    const btnVoltarTopo = document.getElementById("btnVoltarTopo");
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        btnVoltarTopo.style.display = "block";
    }
    else {
        btnVoltarTopo.style.display = "none";
    }
}
(_a = document.getElementById("btnVoltarTopo")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    window.scrollTo(0, 0);
});
export {};
//# sourceMappingURL=voltarTopo.js.map