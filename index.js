let but = document.querySelector(".btn")
let taskInput = document.querySelector(".task_value")
let list = document.querySelector(".list")

function addItem () {
    if (taskInput.value.length === 0) {
        alert("Input is empaty, please enter your text")
        return;
    }
    let listItem = document.createElement("li")
    listItem.setAttribute("class", "list_item")
       let label = document.createElement("label")
      
       let btn = document.createElement("button")
       btn.innerHTML="&#10060"
       btn.setAttribute("class", "list_btn")
       btn.addEventListener("click", function(){
           list.removeChild(listItem);    
       })
       let check = document.createElement("input")
       check.type = "checkbox";
       check.value = false;
       check.addEventListener("change", function(event){
           if (event.currentTarget.checked){
               check.value = true
               label.style.textDecoration = "line-through"      
           }
           else {
               check.value = false;
               label.style.textDecoration = "none"        
           }
       })
       check.setAttribute("class", "list_task")
       label.innerHTML = taskInput.value 
       list.appendChild(listItem)
       listItem.prepend(label)
       label.prepend(check)
       listItem.appendChild(btn)
       taskInput.value = "" 
    }
      but.addEventListener("click", function () {
      addItem()
       });

      taskInput.addEventListener("keypress", function(event){
    if(event.key === "Enter") {
       event.preventDefault();
       addItem()
    }})

    let filter = document.querySelector(".filters")
    let allFilter = document.querySelector(".filters_all");
    let activeFilter = document.querySelector(".filters_active");
    let completedFilter = document.querySelector(".filters_completed");


    allFilter = document.createElement("button");
    allFilter.setAttribute("class", "filters_all");
    allFilter.innerHTML = "All"

    activeFilter = document.createElement("button");
    activeFilter.setAttribute("class", "filters_active");
    activeFilter.innerHTML = "Active"

    completedFilter = document.createElement("button");
    completedFilter.setAttribute("class", "filters_completed");
    completedFilter.innerHTML = "Completed"

    filter.prepend(allFilter)
    filter.appendChild(activeFilter)
    filter.appendChild(completedFilter)

    allFilter.addEventListener("click", function(){
    addFilters("all");
    })

    activeFilter.addEventListener("click", function(){
    addFilters("active");
    })

    completedFilter.addEventListener("click", function(){
    addFilters ("completed")
    })



    function addFilters(value) {
    let lis = list.getElementsByTagName('li');
    let checkI = document.querySelector(".list_task").value;
    for (let i = 0; i < lis.length; i++){
        switch (value) {
            case "all":
                if(checkI.value === "true" || "false"){
                  lis[i].style.display = ""
                }
                console.log(checkI)
              break;
            
              case "active":
                if (checkI.value === 'false') {
                 lis[i].style.display = ".list_task";
                } else {lis[i].style.display = "none"}
                console.log(checkI)
              break;
           
              case "completed":
                if (checkI.value === 'true') {
                  lis[i].style.display = ".list_task";;
                } else {lis[i].style.display = "none"}
                console.log(checkI)

          }
 }}

























