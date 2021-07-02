async function getmsg() {
    return await fetch('http://localhost:3000/mesage').then((response)=>response.json()).then((data)=>data);
}