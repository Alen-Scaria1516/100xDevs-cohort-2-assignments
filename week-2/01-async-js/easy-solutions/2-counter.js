const counter = ()=>{
    console.clear();
    console.log(new Date().toLocaleTimeString())
    setTimeout(counter, 1000);
}
counter();