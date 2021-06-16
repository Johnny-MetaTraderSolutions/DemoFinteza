var keys = {'r':false,'v':false}
document.addEventListener("keydown",(e)=>{
    if(e.key =="r"){
        keys.r = true;
        $("#r").text(keys["r"]?"true":"false")
    }
    if(e.key == "v"){
        keys.v = true;
        $("#v").text(keys["v"]?"true":"false")
    }
    if(keys.r && keys.v){
        console.log(document.getElementById("right-side-container").children)
        var elements = document.getElementById("right-side-container").children;
        
        Array.from(elements).forEach(element => {
            console.log(element)
            element.style.display = "none"
          })
        document.getElementById("discription_of_finteza").style.display = "table-cell";
    }
})
document.addEventListener("keyup",(e)=>{
    if(e.key =="r"){
        keys.r = false;
        $("#r").text(keys["r"]?"true":"false")
    }
    if(e.key == "v"){
        keys.v = false;
        $("#v").text(keys["v"]?"true":"false")
    }
})

function title_height_change(){
    var title = document.getElementById("website-title");
    title.style.height = document.getElementById("logo-img").clientHeight+"px";
    title.style.verticalAlign = "middle";
}
function form_generator() {
    var content = document.getElementById("discription_of_finteza");
    content.style.display = "none";
    var form = document.getElementById("211650936345860")
    form.style.display = "table-cell";
    console.log(form)
}
