
const timelineArray = [ 
        { 
            year: "2023", 
            description:  "ECMAScript created to Standardize JavaScript", 
        }, 
        { 
            year: "2022", 
            description:  "ECMAScript created to Standardize JavaScript", 
        },
        { 
            year: "2021", 
            description:  "ECMAScript created to Standardize JavaScript", 
        }
]; 
  
function gfg() { 

    timelineArray.map((e, i) => { 

        let clss = "experience-section-timeline-card-right"; 
        let dot = "dotRight"; 

        if (i % 2 == 0) { 
            clss = "experience-section-timeline-card-left"; 
            dot = "dotLeft"; 
        }    
        
        const yearElement = document.createElement("h3"); 
        yearElement.innerText = e.year; 

        const descriptionElement = document.createElement("p"); 
        descriptionElement.innerText = e.description; 

        const cardElement = document.createElement("div");  
        cardElement.classList.add("experience-section-timeline-card"); 

        cardElement.appendChild(yearElement); 
        cardElement.appendChild(descriptionElement); 


        const contain = document.createElement("div"); 
        contain.classList.add(dot); 
        contain.appendChild(cardElement); 

        const li = document.createElement("li"); 



        li.appendChild(contain); 
        li.classList.add(clss); 

        document.querySelector(".experience-section-timeline").appendChild(li);
        
        

        }); 
    } 

gfg();