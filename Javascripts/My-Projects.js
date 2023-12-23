
const ProjectsArray = [ 
    { 
        imagePath: "Images/Project_1.png", 
        projectName: "Retirement Planner",
        projectDescription: "A tool to take control of you or your family's finances!",
        techStack: ["ReactJS", "Bootstrap", "Tailwind", "Firebase"]
    }, 
    { 
        imagePath: "Images/Project_2.png", 
        projectName: "Macro Enhanced Excels",
        projectDescription: "Automate mundane excel workflows with VBA!",
        techStack: ["VBA", "MS Excel"]
    },
    { 
        imagePath: "Images/Project_3.jpg", 
        projectName: "Personal Finance Calendar",
        projectDescription: "One file to track all your finances & more!",
        techStack: ["Python", "Openpyxl", "MS Excel"]
    },
    { 
        imagePath: "Images/Project_4.png", 
        projectName: "Disk Based Frequent Itemset Miner",
        projectDescription: "Mine frequent itemsets no matter the size of your main memory!",
        techStack: ["Python"]
    },
    { 
        imagePath: "Images/Project_5.png", 
        projectName: "Trending YT Videos Predictor",
        projectDescription: "Trained on real YT data using state of the art algorithms such as Random Forest!",
        techStack: ["Python", "Pandas", "Scikit-Learn"]
    },
    { 
        imagePath: "Images/Project_6.png", 
        projectName: "Career Navigator",
        projectDescription: "Your digital companion to supercharge your tech career!",
        techStack: ["ReactJS", "Bootstrap"]
    }
]; 

const GalleryElement = document.querySelector(".project-section-gallery");

function MyProjects() { 

    

    ProjectsArray.map((e) => { 

        const imageElement = document.createElement("img");
        imageElement.src = e.imagePath;
        imageElement.classList = "project-section-gallery-element-image";

        const titleElement = document.createElement("div");
        titleElement.innerText = e.projectName;
        titleElement.classList = "project-section-gallery-element-title";

        const descElement = document.createElement("div");
        descElement.innerText = e.projectDescription;
        descElement.classList = "project-section-gallery-element-desc";

        const techStackGridElement = document.createElement("div");
        techStackGridElement.classList = "project-section-gallery-element-techGrid";

        const techStackTitleElement = document.createElement("div");
        techStackTitleElement.innerText = "Tech Stack:";
        techStackTitleElement.classList = "project-section-gallery-element-techTitle";

        const techStackElement = document.createElement("ul");

        e.techStack.forEach((e2) => {

            const techP = document.createElement("li");
            techP.innerText = e2;
            techP.classList = "project-section-gallery-tech";
            techStackElement.appendChild(techP);
        })

        techStackGridElement.appendChild(techStackTitleElement);
        techStackGridElement.appendChild(techStackElement);      


        const GalleryItemElement = document.createElement("div");
        GalleryItemElement.classList = "project-section-gallery-element expand-on-hover";
        GalleryItemElement.appendChild(imageElement);
        GalleryItemElement.appendChild(titleElement);
        GalleryItemElement.appendChild(descElement);
        GalleryItemElement.appendChild(techStackGridElement);

        GalleryElement.appendChild(GalleryItemElement);

        }); 
 

    function handleScroll(event) {
        console.log(event.deltaY);
        GalleryElement.scrollLeft += event.deltaY;

    }
    
    GalleryElement.onmouseenter = () => {
        console.log("Enter");
        GalleryElement.addEventListener('wheel', handleScroll);
    };
    
    GalleryElement.onmouseleave = () => {
        console.log("Left");
        GalleryElement.removeEventListener('wheel', handleScroll);

    };

    const ScrollLeftButtonElement = document.querySelector(".project-section-gallery-buttonLeft");
    ScrollLeftButtonElement.addEventListener("onclick", galleryScrollLeft);



}

function galleryScroll(scrollLen) {
    GalleryElement.scrollLeft += scrollLen;
}


MyProjects();


