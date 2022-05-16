    
    function Num(value){
       document.getElementById('screen').value += value;
    }

    function equal(){
        let Input = document.getElementById('screen').value;
        let Output = eval(Input);
        document.getElementById('screen').value = Output;
    }

    function clr(){
        document.getElementById('screen').value = '';
    }




