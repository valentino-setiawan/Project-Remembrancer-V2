const Input = document.querySelector("#password");
const SuBtn = document.querySelector("#btn");

function redir() {
    window.location.href = "https://valentino-setiawan.github.io/Project-Remembrancer-V2/NOT-Ind/KoA.html"
}

SuBtn.addEventListener("click", function () {
    console.log("e")
    var passVal = Input.value;
    if (passVal === "ThroughHisWillAlone" ) {
       redir()
       console.log("casserole")
    }
});
