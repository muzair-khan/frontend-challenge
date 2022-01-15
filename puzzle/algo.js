
// Variable Selection for list
var list = document.querySelector("ul");
// Empty Node Creation for creating empty space through li (not using tile class)
var node= document.createElement("li");
list.appendChild(node);
// Getting li in ul tag after empy node addition
var listItems = document.querySelectorAll("li");
// Saving Empty node in Variable for easier access (logic can also work through list.childNodes[emptyNode])
var emptyNode = list.lastElementChild;
// Saving Empty Node index (Line change is also considered as child node, therefore 18-1 is the last empty Node)
var emptyNodeIndex=17;
// For loop on List Items variable, it has an event listener for click event which listens for clicks on tiles
listItems.forEach((item, index) => {
    item.addEventListener('click', (event) => {
        clickedItem=event.currentTarget.innerHTML 
        
            /* If clause looking for four possible scenarios, if clicked index has an option to move right, left, down or up, +2 indicates right as 2 leaps equals next space and vice versa.
               Representation for li is 2 dimensional, therefore the depiction of moving up or downwards means 3 positions upwards in list or vice versa, therefore +6 or -6.


            */ 
            if((((index+1)*2)-1)+2 === emptyNodeIndex || (((index+1)*2)-1)-2 === emptyNodeIndex
                || (((index+1)*2)-1)+6 === emptyNodeIndex || (((index+1)*2)-1)-6 === emptyNodeIndex    
            ){
                emptyNode.textContent=clickedItem;
                emptyNode.className="tile";
                event.currentTarget.innerHTML = ''
                emptyNode=list.childNodes[((index+1)*2)-1]
                emptyNode.removeAttribute('class');
                emptyNodeIndex=((index+1)*2)-1
            }
        
        
    });
  });