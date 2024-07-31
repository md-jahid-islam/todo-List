 let toduBoxInput = document.querySelector('.toduBoxInput')
 let toduButton = document.querySelector('.toduButton')
 let toduList = document.querySelector('.toduList')
 let doneNumber = document.querySelector('.doneNumber')
 let taskDone = 0
  toduButton.addEventListener('click' , ()=>{
     if(toduBoxInput.value == ''){
         alert('tor noj balo na')
        }else{
            taskDone++  
            doneNumber.innerHTML = taskDone
        
        //================ creating tags =============
         let singelTodu = document.createElement('div')
         toduListInput = document.createElement('Input')
         EditeButton  = document.createElement('Button')
         deleteButton = document.createElement('Button')

        //================ append child =============
            toduList.appendChild(singelTodu)
            singelTodu.appendChild(toduListInput)
            singelTodu.appendChild(EditeButton)
            singelTodu.appendChild(deleteButton)

         //================ add class list =============
         singelTodu.classList.add('singelTodu')
         toduListInput.classList.add('toduListInput')
         EditeButton.classList.add('EditeButton')
         deleteButton.classList.add('deleteButton')
         

         // ============ add content =========
        
         EditeButton.innerHTML = 'Edite'
         deleteButton.innerHTML = 'delete'
         toduListInput.value = toduBoxInput.value
         //================ set attribute
         singelTodu.setAttribute('readonly' , 'readonly')

         //================== delete Todo =========
         deleteButton.addEventListener('click' , ()=>{
            singelTodu.remove ()

        // ============= add number in task number
     
         })
          //================== Edite Todo =========
          EditeButton.addEventListener('click' , ()=>{
            if(EditeButton.innerHTML == 'Edite'){uuu  
                EditeButton.innerHTML = 'save'
                EditeButton.style = 'background: red'
                singelTodu.removeAttribute('readonly' , 'readonly')
            }else{
                EditeButton.innerHTML = 'Edite'
                EditeButton.style = 'background:darkcyan'
                singelTodu.setAttribute('readonly' , 'readonly')
            }
          })
      
}    


})