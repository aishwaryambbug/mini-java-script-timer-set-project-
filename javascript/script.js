const timer = document.getElementById("root");

timer.style.height = "100vh";
timer.style.fontSize = "200px";
timer.style.display = "flex";
timer.style.justifyContent = "center";
timer.style.alignItems = "center";

setInterval(() => {
    const now = new Date();
    const IndianTime = now.toLocaleTimeString();
    timer.innerHTML = IndianTime;
}, 1000);
