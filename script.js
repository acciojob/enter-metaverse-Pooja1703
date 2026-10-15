document.getElementById("enterBtn").addEventListener("click", function() {
    let h1 = document.createElement("h1");
    h1.innerText = "Entered Metaverse";

    document.getElementById("status").innerHTML = "";
    document.getElementById("status").appendChild(h1);
});