const input = document.querySelector("input");
const form = document.querySelector("form");

form.onsubmit = (e) => {

    e.preventDefault();

    if (input.value == '') {
        alert("Digite algo!")
    }
    else {


        console.log("foi")

        const itens = document.querySelector(".itens")

        const div = document.createElement('div')
        div.className = 'item';

        const label = document.createElement('label')
        label.className = 'checado';

        const novoInput = document.createElement('input')
        novoInput.setAttribute('type', 'checkbox')
        novoInput.className = 'check'

        const p = document.createElement('p')
        p.innerText = input.value;

        const img = document.createElement('img')
        img.className = 'deletar'
        img.setAttribute('src', './assets/icons/delete-02-stroke-rounded.svg')




        itens.appendChild(div);
        div.appendChild(label)
        label.appendChild(novoInput);

        div.appendChild(p)
        div.appendChild(img)

        input.value = ""


        const deletar = document.querySelectorAll('.deletar');
        deletar.forEach((btn) => {
            btn.onclick = (e) => {
                e.preventDefault();
                const el = e.target; 
                if (el.classList.contains('deletar')) {
                    const itemPai = el.closest('.item'); 
                    itemPai.remove(); 
                    console.log('Item deletado!');

                    mensagemDeletado()
                } 
            };
        });

       
        
    }
}

function mensagemDeletado(){
    const removeContainer = document.createElement('div')
    removeContainer.className = 'remove-container'

    const removido = document.createElement('div')
    removido.className = 'removido'

    const div = document.createElement('div')

    const exclamacao = document.createElement('p')
    exclamacao.innerText = '!'

    const p = document.createElement('p')
    p.innerText = 'O item foi removido da lista'

    const h1 = document.createElement('h1')
    h1.innerText = 'x'
    h1.className = 'tira'


    const main = document.querySelector('main')

    main.appendChild(removeContainer)
    removeContainer.appendChild(removido)
    removido.appendChild(div)
    div.appendChild(exclamacao)
    removido.appendChild(p)
    removido.appendChild(h1)


}
const main = document.querySelector('main')
main.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('tira')){
       const itemPaiX = el.closest('.removido');
        itemPaiX.remove()
    }


})