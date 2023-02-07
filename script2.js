function Calculadora (){
    this.display = document.querySelector('.display');
    this.btnClear =  document.querySelector('.btn-clear');

    this.inicia = () =>{
        this.cliqueBotoes();
        this.pressionaEnter();
    };

    this.pressionaEnter = () =>{
        this.display.addEventListener('keyup', e =>{
            if(e.keyCode !== 13){
                return;
            } else{
                this.realizaConta();
            }
        })
    };

    this.realizaConta = () =>{
        let conta = this.display.value;

        try {
            conta = eval(conta);

            if(!conta){
                alert('Conta inválida!');
                return;
            }

            this.display.value = conta;
        } catch (error) {
            alert('Conta inválida!');
            return;
        }
    };

    this.clearDisplay = () =>{
        this.display.value = '';
    };

    this.deleteUm = () =>{
        //tamanho da string = 0 e -1 um p apagar
        this.display.value =this.display.value.slice(0, -1);
    };

    
    this.cliqueBotoes = () =>{
        //this -> calculadora aqui
        //para usar o this como calculadora e n document usa a arrow function
        document.addEventListener('click', (e) => {
            const el = e.target;

            if (el.classList.contains('btn-num')){
                //aqui o this é o document
                //pega o innerText do botão (o que tá escrito no html)
                this.btnParaDisplay(el.innerText);
            }

            if(el.classList.contains('btn-clear')){
                this.clearDisplay();
            }

            if(el.classList.contains('btn-del')){
                this.deleteUm();
            }

            if(el.classList.contains('btn-eq')){
                this.realizaConta();
            }
            
        });
    };

    this.btnParaDisplay = (valor) => {
        //concatenar os valores (botoes) clicados
        this.display.value += valor;
        //para deixar o foco sempre no display
        this.display.focus();
    }
};

const calculadora = new Calculadora();
calculadora.inicia();