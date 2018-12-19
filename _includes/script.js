document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("rankingArrowRight").addEventListener("click", function(){
        document.getElementById('table-responsive').scrollLeft += 40;
    });
});