// let list = document.querySelector(".list")
// let but = document.querySelector(".btn_delete")
// list.onmouseenter = function(){
//     but.style.display = "inline"
    
// }
// list.onmouseleave = function () {
//     but.style.display = "none"
// }


// let list = document.querySelectorAll(".list")

// list.forEach(function(val){
//     list.onmouseenter = function(){
//         btn.style.display = "inline" }})
//  function mouseOver(el){
//      list.forEach(element => {
//          if(element.id ===el.id){
//              //show element
//          }
//      });
//  }


let but = document.querySelector(".btn")
let inputValue = document.querySelector("#put")
let list = document.querySelector(".list")


but.addEventListener("click", function () {
    console.log(inputValue.value,'ddddd')
    if (inputValue.value.length === 0) {
        alert("enter text")
        return;
    }
    let elem = document.createElement("li")
       elem.setAttribute("class", "list_item")
       let label = document.createElement("label")
      
       let btn = document.createElement("button")
       btn.innerHTML="&#10060"
       btn.setAttribute("class", "list_btn")
       let check = document.createElement("input")
       check.type = "checkbox"
       check.setAttribute("class", "list_task")
       label.innerHTML = inputValue.value 
      
       list.appendChild(elem)
       elem.prepend(label)
       label.prepend(check)
       elem.appendChild(btn)
       

     label.addEventListener("cklick", function (){
         label.classList.toggle("line-through")
     })
     inputValue.value = ""

    // label.addEventListener("cklick", function () {
    //     label.classList.add("line-trough") 
    //     check.addEventListener("cklick", function (){
    //         check.checked = true;
    //     })
    // })


    // elem.addEventListener("click", function(){
    //    elem,this.classList.add("underline")
    // })
     
     })
    



     


    // inputValue.addEventListener("keypress", function(enter){
    //     if(enter.keycode === 13 ){
    //     let elem = document.createElement("li")
    //     elem.setAttribute("class", "list_item")
    //     let btn = document.createElement("button")
    //     btn.innerHTML="&#10060"
    //     btn.setAttribute("class", "list_btn")
    //     elem.innerHTML = inputValue.value 
    //     list.appendChild(elem)
    //     elem.appendChild(btn)
    //     }

    // })
        