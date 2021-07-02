document.addEventListener('DOMContentLoaded', async function() {
    let msgs = await getmsg();
    let i = 1;
    let articles = document.querySelector('.append');
    articles.innerHTML = ``;
    msgs.forEach((msg)=>{
        let msgHtml = `<div class="row">
        <div class="col-2">${i++}</div>
        <div class="col-7">${msg.msg}</div>
        <div class="col-3">X</div>
    </div>`

    articles.insertAdjacentHTML("beforeend",msgHtml);
    })
})