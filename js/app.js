$( document ).ready(function() {
    
    
    var displayStr = "";
    
    function evalutateExpression(expression) {
        return eval(displayStr);
    }
    
    function updateDisplay (command) {
        if(command === "Equals") {
            displayStr = evalutateExpression(displayStr);
            $('#screen').val(displayStr);
        }else{
            switch (command) {
                case "0":
                    displayStr += "0";
                    break;
                case "1":
                    displayStr += "1";
                    break;
                case "2":
                    displayStr += "2";
                    break;
                case "3":
                    displayStr += "3";
                    break;
                case "4":
                    displayStr += "4";
                    break;
                case "5":
                    displayStr += "5";
                    break;
                case "6":
                    displayStr += "6";
                    break;
                case "7":
                    displayStr += "7";
                    break;
                case "8":
                    displayStr += "8";
                    break;
                case "9":
                    displayStr += "9";
                    break;
                case "Plus":
                    displayStr += "+";
                    break;
                case "Minus":
                    displayStr += "-";
                    break;
                case "Divide":
                    displayStr += "/";
                    break;
                case "Multiply":
                    displayStr += "*";
                    break;
                case "CE":
                    displayStr = displayStr.slice(0,-1);
                    break;
                case "AC":
                    displayStr = "";
                    break;
                case "IntDivision":
                    displayStr += "%";
                    break;
                case "Decimal":
                    displayStr += ".";
                    break;
                case "Ans":
                    break;
                default:
                    displayStr = "ERROR";
                    break;
                    
            }
            $('#screen').val(displayStr);
        }
    }
    
    $('#screen').val(displayStr);
    
    $('.btn').click(function () { 
        var id = this.id.slice(3,this.id.length);
        console.log(id);
        updateDisplay(id);
    });
    
    
});