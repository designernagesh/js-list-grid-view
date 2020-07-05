let btnList = document.querySelector(".btnList");
let btnGrid = document.querySelector(".btnGrid");
let viewItems = document.querySelector(".viewItems");

btnList.addEventListener('click', function(){
    this.classList.add("btn-danger");
    btnGrid.classList.remove("btn-danger");
    viewItems.classList.remove("gridView"); 
    viewItems.classList.add("listView");
})

btnGrid.addEventListener('click', function(){
    btnList.classList.remove("btn-danger");
    btnList.classList.add("btn-secondary");
    this.classList.add("btn-danger");  
    viewItems.classList.remove("listView");
    viewItems.classList.add("gridView");
})