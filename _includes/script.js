document.addEventListener("DOMContentLoaded", function(){
    /* BEGIN INTERACTIVITY */
    document.getElementById("rankingArrowRight").addEventListener("click", function(){
        document.getElementById('table-responsive').scrollLeft += 40;
    });
    document.getElementById("rankingArrowLeft").addEventListener("click", function(){
        document.getElementById('table-responsive').scrollLeft += -40;
    });
    /* END INTERACTIVITY */
});
