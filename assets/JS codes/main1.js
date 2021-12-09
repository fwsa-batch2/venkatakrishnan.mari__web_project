function inputNumbers(result){
    form.displayResult.value=form.displayResult.value+result;
    
    }
    function clr() {
       form.displayResult.value=form.displayResult.value.slice(0,-1);
    }
    function sqr() {
       form.displayResult.value=Math.sqrt(form.displayResult.value);
    }