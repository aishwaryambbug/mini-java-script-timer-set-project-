const maindiv = document.getElementById("root");

maindiv.style.display = "flex";
maindiv.style.justifyContent = "center";
maindiv.style.alignItems = "center";
maindiv.style.height = "100vh";
maindiv.style.fontSize = "50px";

setInterval(() => {

    let date1 = new Date();
    let date2 = new Date("2028-07-14T00:00:00");

    const date = date2 - date1;

    // milliseconds to date
    const days = Math.floor(date / (1000 * 60 * 60 * 24));
    const hour = Math.floor(date / (1000 * 60 * 60)) % 24;
    const min = Math.floor(date / (1000 * 60)) % 60;
    const sec = Math.floor(date / 1000) % 60;

    let s = `${days} Days ${hour} Hours ${min} minutes ${sec} seconds`;

    maindiv.innerHTML = s;

    console.log(s);

}, 1000);