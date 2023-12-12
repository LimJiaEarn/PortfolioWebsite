
const timelineArray = [ 
        { 
            year: "2023", 
            title: "Data Analyst Intern — BAT",
            description:  "• Created PowerBi reports with live data modelling to generate visualisations and insights through DAX features\
                        \n • Developed VBA scripts to automate data extraction and cleaning from SAPECC systems\
                        \n • Enhanced over 10 workflows’ efficiency by >10% for data analysis and cleaning using M and VBA", 
        }, 
        { 
            year: "2022", 
            title: "Data Analyst Intern — Aquarius Soft",
            description:  "• Improved classification of datasets to improve data prediction accuracy from 50% to 70%\
                        \n • Furnished analytics needed to guide decisions to reduce operating costs and increase business efficiency"
        },
        { 
            year: "2022", 
            title: "Data Analyst Intern — Mathnasium",
            description:  "• Assessed and taught over 50 students from\nGrade 4 - 9\
                        \n • Presented learning and guidance through Mathnasium Method such as Socratic Questioning"
        },
        { 
            year: "2022", 
            title: "Math Tutor — MindFlex",
            description:  "• Tutored students taking PSLE, O levels, A levels\
                        \n • Tailored conceptual knowledge to meet each student's learning style through my personal library of comprehensive notes and practice papers"
        }
]; 
  
function JourneyTimeline() { 

    timelineArray.map((e, i) => { 

        const yearElement = document.createElement("h3"); 
        yearElement.innerText = e.year; 

        const titleElement = document.createElement("h4"); 
        titleElement.innerText = e.title; 

        const descriptionElement = document.createElement("p"); 
        descriptionElement.innerText = e.description; 

        const cardElement = document.createElement("div");  

        cardElement.appendChild(yearElement); 
        cardElement.appendChild(titleElement);
        cardElement.appendChild(descriptionElement); 


        if (i % 2 == 0)
            cardElement.classList.add("journey-section-timeline-card-left"); 
        
        else
            cardElement.classList.add("journey-section-timeline-card-right"); 

        document.querySelector(".journey-section-timeline").appendChild(cardElement);
        
        

        }); 
    } 

JourneyTimeline();