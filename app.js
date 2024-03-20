let grid = document.querySelector('.grid')
let myTimeout = 1000
let squares = []


let container = document.querySelector(".container")
let btn = document.querySelector("button");
let n =  document.querySelector("#size");
let arr1 =  document.querySelector("#arr");
let arr = [ ];
let size ;


btn.addEventListener("click" , async() =>{
    let values = arr1.value.split(" ");
    values.forEach(element => {
        arr.push(parseInt(element));
    });
    size = (parseInt(n.value));
    n.value = " ";
    arr1.value = " ";    
    await someFunction(); 
});

async function someFunction() {
    console.log(size);
    for(let i = 0 ; i<size; i++){
        let square = document.createElement('div')
        square.setAttribute('id',i)
        square.innerText = arr[i];
        grid.append(square)
        squares.push(square)
    }
    console.log(parseInt(squares[0].innerText));
    bubble_sort();
}



function bubble_sort() {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < squares.length - i - 1; j++) {
            setTimeout(function () {
                if (parseInt(squares[j].innerText) > parseInt(squares[j + 1].innerText)) {
                    squares[j].classList.add('exchange')
                    squares[j + 1].classList.add('exchange')
                    setTimeout(function () {
                        let temp = squares[j].innerText
                        squares[j].innerText = squares[j + 1].innerText
                        squares[j + 1].innerText = temp
                        squares[j].classList.remove('exchange')
                        squares[j + 1].classList.remove('exchange')
                    }, 1000)
                }
                else{
                    squares[j].classList.add('exchange')
                    squares[j + 1].classList.add('exchange')
                    setTimeout( function () {
                        squares[j].classList.remove('exchange')
                        squares[j + 1].classList.remove('exchange')
                    } , 1000);
                   
                }
            }, myTimeout)
            myTimeout += 2000;
        }
    }
}







