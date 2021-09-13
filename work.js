var initialPirce = document.querySelector('#initial-price')
var stockQuantity = document.querySelector('#quantity')
var currentPrice = document.querySelector('#current-price')
var checkBtn = document.querySelector('#check-btn')
var outputBox = document.querySelector('#output-box')
var inputBoxes = document.querySelectorAll('.inputs')


//calculate profit and loss
function calculateProfitAndLoss(initial, quantity, current) {
    if(initial > current){
        var loss = (initial - current) * quantity;
        var lossPer = ((loss/initial) * 100).toFixed(2)
        document.body.style.backgroundColor = "#EF4444"
        
        showOutput(`sorry, you got loss of ${loss} and loss percentage is ${lossPer}`)

    }else if(initial < current){
        var profit = (current - initial)*quantity
        var profitPer = ((profit/initial) * 100).toFixed(2)

       document.body.style.backgroundColor = "#6EE7B7"
        showOutput(`yupee, you made a proft of ${profit} and profit percentage is ${profitPer}`)
    }
    else{
        showOutput("no pain no gain")
    }
}


//show output message
function showOutput(message) {
    outputBox .innerText = message
}

//checks valid 
function clickHandler() {

    var initialValue = Number(initialPirce.value);
    var quantityStock = Number(stockQuantity.value);
    var currentValue = Number(currentPrice.value); 
    
        var flag = true
    for(var i = 0;i<inputBoxes.length; i++){
            if(inputBoxes[i].value == ""  ){
                outputBox.innerText = "please fill all the input fields"
                flag = false;
                break;
            
            }
            else if(inputBoxes[i].value <= 0 ){
                        outputBox.innerText = "field cannot be negative"
                        flag = false;
                break;
            }
    }
         if(flag == true){
            calculateProfitAndLoss(initialValue , quantityStock, currentValue) 
        }
        
        
        //OLD APPROACH
    /*if(initialValue == "" || quantityStock == "" || currentValue == "" || initialValue <= 0 || quantityStock <= 0 || currentValue <= 0){
            outputBox.innerText = "please check the fields again"
    }
    else{
        
         calculateProfitAndLoss(initialValue , quantityStock, currentValue) 
    } */
    
}
checkBtn.addEventListener('click',clickHandler)