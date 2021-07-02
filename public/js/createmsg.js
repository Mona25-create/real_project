let createmsg = document.querySelector('.form');
let inputmsg = document.querySelector('.testingmsg');
createmsg.addEventListener('submit', function(e){
    e.preventDefault();
    fetch('http://localhost:3000/mesage', {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            msg: inputmsg.value
        })
    }).then((response) => response.text()).then((data)=> window.history.go());
})