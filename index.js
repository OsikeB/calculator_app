let keys = document.querySelectorAll("#calculator span");

let operators = ['+', '-', '*', '/'];

for(let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', function(e){
        let input = document.querySelector('.screen');
        //get input from display box
        let inputVal = input.innerHTML;
        //Which button was pressed
        let btnVal = this.innerHTML;

        if(btnVal == 'C') {
            input.innerHTML = '';
            decimalAdd = false;
        }
        //calculate result
        else if(btnVal == '='){
            let equation = inputVal;
            let lasChar = equation[equation.length-1];
            equation = equation.replace(/x/g, '*').replace(/:/g, '/');
            
        } 
    })
}