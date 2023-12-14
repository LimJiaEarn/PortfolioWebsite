
const ExperienceArray = [ 
    { 
        companyLogoPath: "Images/BAT_Logo.png", 
        companyName: "British America Tobacco",
        title: "Data Analyst Intern",
        workingDuration: "May 2023 - Aug 2023",
        responsibilities:  ["Created PowerBi reports with live data modelling to generate visualisations and insights through DAX features",
                        "Developed VBA scripts to automate data extraction and cleaning from SAPECC systems",
                        "Enhanced over 10 workflows’ efficiency by >10% for data analysis and cleaning using M and VBA"]
    }, 
    { 
        companyLogoPath: "Images/AquariusSoft_Logo.png",
        companyName: "Aquarius Soft",
        title: "Data Analyst Intern",
        workingDuration: "May 2022 - Aug 2022",
        responsibilities:  ["Improved classification of datasets to improve data prediction accuracy from 50% to 70%",
                        "Furnished analytics needed to guide decisions to reduce operating costs and increase business efficiency"]
    },
    { 
        companyLogoPath: "Images/Mathnasium_Logo.jpg", 
        companyName: "Mathnasium",
        title: "Math Teacher",
        workingDuration: "May 2022 - Aug 2022",
        responsibilities:  ["Assessed and taught over 50 students from Grade 4 - 9",
                        "Presented learning and guidance through Mathnasium Method such as Socratic Questioning"]
    },
    { 
        companyLogoPath: "Images/Mindflex_Logo.webp",
        companyName: "Mindflex",
        title: "Math Tutor",
        workingDuration: "Aug 2021 - Dec 2023",
        responsibilities:  ["Tutored students taking PSLE, O levels, A levels",
                        "Tailored conceptual knowledge to meet each student's learning style through my personal library of comprehensive notes and practice papers"]
    }
]; 

function MyExperience() { 

    ExperienceArray.map((e) => { 

        const companyLogoElement = document.createElement("img"); 
        companyLogoElement.src = e.companyLogoPath; 
        companyLogoElement.classList = "experience-section-companyLogo";

        const companySectionInsertElement = document.createElement("div");
        companySectionInsertElement.classList = "experience-section-companySection";
        companySectionInsertElement.appendChild(companyLogoElement);

        const CompanyElement = document.querySelector(".experience-section-grid");
        CompanyElement.appendChild(companySectionInsertElement);


        const companyTitleElement = document.createElement("p");
        companyTitleElement.innerText = e.title + ", " + e.companyName;
        companyTitleElement.classList = "experience-section-description-title";

        const workDurationElement = document.createElement("p");
        workDurationElement.innerText = e.workingDuration;
        workDurationElement.classList = "experience-section-description-workDuration";

        const responsibilitiesElement = document.createElement("ul");
        responsibilitiesElement.classList = "experience-section-description-responsibilities";


        e.responsibilities.forEach((e2)=>{

            const responsibilityListItem = document.createElement("li");
            responsibilityListItem.innerText = e2;
            responsibilityListItem.classList = "experience-section-description-responsibilities-element"
        
            responsibilitiesElement.appendChild(responsibilityListItem);
        })

        
        DescriptionInsertElement = document.createElement("div");
        DescriptionInsertElement.appendChild(companyTitleElement);
        DescriptionInsertElement.appendChild(workDurationElement);
        DescriptionInsertElement.appendChild(responsibilitiesElement);

        DescriptionElement = document.querySelector(".experience-section-grid");
        DescriptionElement.appendChild(DescriptionInsertElement);


        }); 
    } 

MyExperience();