const home = document.getElementById('home');
const register = document.getElementById('register');
const companyView = document.getElementById('company');
const main = document.getElementById('main-content');
window.onload = registerStud()
companyView.addEventListener('click', companyV);
register.addEventListener('click', registerStud);
//Company View
function companyV(){
    main.innerHTML = `
    <iframe class="airtable-embed" src="https://airtable.com/embed/shr6UuVuzN2ipB6N7?backgroundColor=green&layout=card&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="700" style="background: transparent;"></iframe>
    `;
};

function registerStud(){
    main.innerHTML=`
    <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script><iframe class="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shrkx03RGPiF9yW1g?backgroundColor=teal" frameborder="0" onmousewheel="" width="100%" height="700" style="background: transparent;"></iframe>
    `;
};