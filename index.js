let but = document.querySelector(".btn")
let inputValue = document.querySelector(".task_value")
let list = document.querySelector(".list")

function addItem () {
    if (inputValue.value.length === 0) {
        alert("Input is empaty, please enter your text")
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
}

but.addEventListener("click", function () {
    addItem()
    });


inputValue.addEventListener("keypress", function(event){
    if(event.key === "Enter") {
       event.preventDefault();
       addItem()
    }})