// alert("wleowleo");
// const Source = document.querySelector("#Intr");
// Intr.addEventListener("submit", onSubmit);

// function onSubmit(e) {
//     e.preventDefault();

//      alert("bruh");
// }



// const TextCont = document.querySelector("p");
// TextCont.textContent = "Teks Konten";

// const MyImg = document.querySelector("input");
// const Morph = document.querySelector("img") 

// MyImg.onclick =  function () {
//     const MySrc = Morph.getAttribute("Src");
//     if (MySrc === 'src', 'Source/bluntboi.png')
//         Morph.setAttribute("src", "Source/blunterboi.png");
    
//     else (Morph.setAttribute("src", "Source/bluntboi.png"))
    
// }

// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img01");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
// }

// // Get the <span> element that closes the modal

// // When the user clicks on <span> (x), close the modal





document.querySelectorAll(".Media img").forEach(image => {
    image.onclick = () => {
        document.querySelector(".modal").style.display = "flex";
        document.querySelector(".modal img").src = image.getAttribute("src");
    }
});

const span = document.getElementsByClassName("close")[0];
const modal = document.getElementById("myModal");


span.onclick = function() { 
    modal.style.display = "none";
}

const Input = document.querySelector("#password");
const SuBtn = document.querySelector("#btn");

function redir() {
    window.location.href = "https://valentino-setiawan.github.io/Project-Remembrancer-V2/NOT-Ind/KoA.html"

}

SuBtn.addEventListener("click", () => {
    var passVal = Input.checkValidity();
    if (passVal == true ) {
       redir()
    }
});
