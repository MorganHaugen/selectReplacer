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
    for( part of originalContent){
        
        const list = document.createElement('li');
        list.className = part.className + "New";

        
        list.id = part.id;
        list.value = part.value;
        list.textContent = part.textContent;
        list.style.borderColor = part.id;
    
      
        document.querySelector(".selectNew").appendChild(list);   
    }
    
}


const dropdowns = document.getElementsByClassName("selectNew");
const select = document.getElementsByClassName("dropbtn")[0];
function dropdownToggle() {  
    document.querySelector('.selectNew').classList.toggle("show"); 
}
select.addEventListener("click", dropdownToggle);

const options = document.querySelectorAll('.dropdown ul li');
// document.querySelector(".dropdown")
for (option of options) {
    option.addEventListener("click", function (event) {
        const listButton = event.target;
        document.querySelector(".dropbtn").textContent = listButton.textContent;
        document.querySelector(".dropbtn").style.borderColor = listButton.style.borderColor;
});
}

