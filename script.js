// const one=document.getElementById("one")
// const two=document.getElementById("two")
// const three=document.getElementById("three")
// const four=document.getElementById("four")
// const five=document.getElementById("five")
// const six=document.getElementById("six")
// const seven=document.getElementById("seven")
// const eight=document.getElementById("eight")
// const nine=document.getElementById("nine")
// const zero=document.getElementById("zero")
const final=document.getElementById("final")
// const del=document.getElementById("del")
// const mul=document.getElementById("mul")
// const sub=document.getElementById("sub")
// const add=document.getElementById("add")
const equal=document.getElementById("equal")
// const div=document.getElementById("div")
// const per=document.getElementById("per")
// const ob=document.getElementById("ob")
// const cb=document.getElementById("cb")

const btn=document.querySelectorAll(".btn")
const arr=[one,two,three,four,five,six,seven,eight,nine,zero]

btn.forEach(element => {
    element.addEventListener('click',function(){
        final.value+=(this.textContent)
        // console.log(this.textContent)
    })
});

equal.addEventListener('click',function(){
    let y=final.value
    if (y[0]=="0"){
        y=y.slice(1)
    }
    else if(y[-1]=="="){
        y=y.slice(0,-1)
    }
    else{
        console.log(y,eval(y))
        
    }
    final.value=eval(y)
    
})
del.addEventListener('click',function(){
    const output=final.value
    final.value=output.slice(0,-1)
})

window.addEventListener("keydown", checkKeyPressed);


function checkKeyPressed(a) {
        if (a.keyCode == "13") {
            equal.click();
        }     
}

window.onerror = function() {
    alert("ERROR!!!!!!!");
    final.value=""
    return true;
  };