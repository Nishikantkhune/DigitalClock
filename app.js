// indian watch
let indianWatch = ()=>{
    let option = {timeZone : 'Asia/kolkata'};
    let currentDate = new Date().toLocaleDateString('en-us',option);
    let currentTime = new Date().toLocaleTimeString('en-us',option);
    document.querySelector('#indian-date').innerText = currentDate;
    document.querySelector('#indian-time').innerText = currentTime;
};

setInterval(indianWatch,1000);

// USA watch
let USAWatch = ()=>{
    let option = {timeZone : 'America/New_York'};
    let currentDate = new Date().toLocaleDateString('en-us',option);
    let currentTime = new Date().toLocaleTimeString('en-us',option);
    document.querySelector('#USA-date').innerText = currentDate;
    document.querySelector('#USA-time').innerText = currentTime;
};

setInterval(USAWatch,1000);

// china watch
let ChinaWatch = ()=>{
    let option = {timeZone : 'Asia/shanghai'};
    let currentDate = new Date().toLocaleDateString('en-us',option);
    let currentTime = new Date().toLocaleTimeString('en-us',option);
    document.querySelector('#china-date').innerText = currentDate;
    document.querySelector('#china-time').innerText = currentTime;
};

setInterval(ChinaWatch,1000);