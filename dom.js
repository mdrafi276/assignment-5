let total = 0 ;

function handleClick(terget) {
    
    const selactedItemContainer = document.getElementById('selacted-item');
    const itemName = terget.parentNode.parentNode.childNodes[3].innerText;
    
 
    const li = document.createElement('itemNameText');
    li.innerText = itemName;
     

    selactedItemContainer.appendChild(li);
    
     const price = terget.parentNode.parentNode.childNodes[7].innerText.split(' ')[1];
    total = parseInt(total) + parseInt(price);
     const firstPrice = document.getElementById('total').innerText = total;
     console.log(firstPrice)  
     
    
   



}