const clockWithAMPM = ()=>{
    setInterval(()=>{
        console.clear();
        console.log(new Date().toLocaleTimeString('en-US'));
    },1000)
}

const clock = ()=>{
    setInterval(()=>{
        console.clear();
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        console.log(`${hours}:${minutes}:${seconds}`);
    },1000)
}
// clock();
clockWithAMPM();