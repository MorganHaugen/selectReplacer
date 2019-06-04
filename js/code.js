//create ul with same name as select
original = document.querySelector(".selectClass");
original.style.display= "none";
originalContent = document.querySelectorAll(".optionClass");

listCreator();
function listCreator(){
    const dropdown = document.createElement('div');
    dropdown.className = "dropdown";
    const dropbtn = document.createElement('div');
    dropbtn.className = "dropbtn";
    dropbtn.textContent = document.querySelector(".selectClass")[0].textContent; 

    dropbtn.style.borderColor = original[0].id;

    const outerList = document.createElement('ul');
    outerList.className = "selectNew";

    document.querySelector(".box1").appendChild(dropdown);
    document.querySelector(".dropdown").appendChild(dropbtn);
    document.querySelector(".dropdown").appendChild(outerList);
    //create li with same name & content as option, 
    for( let i=0; i<originalContent.length; i++){
        
        const list = document.createElement('li');
        part = document.querySelector(".selectClass");
        list.className = part[i].className + "New";

        
        list.id = part[i].id;
        list.value = part[i].value;
        list.textContent = part[i].textContent;
        list.style.borderColor = part[i].id;
    
      
        document.querySelector(".selectNew").appendChild(list);   
    }
}


const dropdowns = document.getElementsByClassName("selectNew");
const select = document.getElementsByClassName("dropbtn")[0];
const window = document.get;
function dropdownToggle() {  
    document.querySelector('.selectNew').classList.toggle("show"); 
}
function hideDropdown() {
    document.querySelector('.selectNew').classList.style.display.none;
}
select.addEventListener("click", dropdownToggle);
window.addEventListener("click", hideDropdown);

const options = document.querySelectorAll('.dropdown ul li');
// document.querySelector(".dropdown")
for (let j=0; j<options.length; j++) {
    option=document.querySelector('.dropdown ul li');
    dropdowns[j].addEventListener("click", function (event) {
        const listButton = event.target;
        document.querySelector(".dropbtn").textContent = listButton.textContent;
        document.querySelector(".dropbtn").style.borderColor = listButton.style.borderColor;
});

}

