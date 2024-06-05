function evento(e) {
    console.dir(e.target);
    let h2 = e.target.clildren[0];
    h2.innertTex = "Adios";
    
}

function evento(event) {
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.width = '100px';
    });
    setTimeout(()=>{
        location.href = "https://www.youtube.com/@GerminGermanGermen/featured"
    },500);
    
    let currentBox = event.currentTarget;
    currentBox.style.width = '600px';
}