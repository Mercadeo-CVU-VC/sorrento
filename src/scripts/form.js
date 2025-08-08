const btnCol = document.getElementById('col');
const btnRef = document.getElementById('ref');

const imgCol = document.getElementById('img-2');
const imgRef = document.getElementById('img-1');

const contCol = document.getElementById('cont-col');
const contRef = document.getElementById('cont-ref');

btnCol.addEventListener('click', ()=>{

    btnCol.classList.add('active-form');
    btnRef.classList.remove('active-form');

    imgCol.classList.remove('hidden');
    imgRef.classList.add('hidden');

    contCol.classList.remove('hidden');
    contRef.classList.add('hidden');

})

btnRef.addEventListener('click', ()=>{

    btnCol.classList.remove('active-form');
    btnRef.classList.add('active-form');

    imgCol.classList.add('hidden');
    imgRef.classList.remove('hidden');

    contCol.classList.add('hidden');
    contRef.classList.remove('hidden')

})