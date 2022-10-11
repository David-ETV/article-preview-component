const btns = document.getElementById('btn');

const links = document.querySelector('.social-links');
btns.onclick = function(){
    btns.classList.toggle('active');
    links.classList.toggle('active');
}