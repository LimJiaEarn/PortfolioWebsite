
const ProjectsArray = [ 
    { 
        imagePath: "Images/Project_1T.jpg", 
        projectName: "Retirement Planner",
        projectDescription: "A tool to take control of you or your family's finances!",
        techStack: ["ReactJS, Bootstrap, Tailwind, Firebase"]
    }, 
    { 
        imagePath: "Images/Project_2T.jpg", 
        projectName: "Macro Enhanced Excels",
        projectDescription: "Supercharge your mundane excel workflows!",
        techStack: ["VBA", "MS Excel"]
    },
    { 
        imagePath: "Images/Project_3T.jpg", 
        projectName: "Personal Finance Calendar",
        projectDescription: "One file to track all your finances & more!",
        techStack: ["Python", "Openpyxl"]
    },
    { 
        imagePath: "Images/Project_4T.jpg", 
        projectName: "Disk Based Frequent Itemset Miner",
        projectDescription: "Mine frequent itemsets no matter the size of your main memory!",
        techStack: ["Python"]
    },
    { 
        imagePath: "Images/Project_1T.jpg", 
        projectName: "Trending YT Videos Predictor",
        projectDescription: "Trained on real YT data using state of the art algorithms such as Random Forest!",
        techStack: ["Python", "Pandas", "Scikit-Learn"]
    },
    { 
        imagePath: "Images/Project_2T.jpg", 
        projectName: "Career Navigator",
        projectDescription: "Your digital companion to empower your tech career!",
        techStack: ["ReactJS", "Bootstrap"]
    }
]; 

const GalleryElement = document.querySelector(".project-section-gallery");

function MyProjects() { 

    

    ProjectsArray.map((e) => { 

        const imageElement = document.createElement("img");
        imageElement.src = e.imagePath;
        imageElement.classList = "project-section-gallery-element-image";

        const GalleryItemElement = document.createElement("div");
        GalleryItemElement.classList = "project-section-gallery-element expand-on-hover";
        GalleryItemElement.appendChild(imageElement);

        const titleElement = document.createElement("div");
        titleElement.innerText = e.projectName;
        titleElement.classList = "project-section-gallery-element-title";

        const descElement = document.createElement("div");
        descElement.innerText = e.projectDescription;
        descElement.classList = "project-section-gallery-element-desc";

        const techStackElement = document.createElement("ul");

        e.techStack.forEach((e2) => {

            const techP = document.createElement("li");
            techP.innerText = e2;
            techP.classList = "project-section-gallery-tech";
            techStackElement.appendChild(techP);
        })

        GalleryItemElement.appendChild(titleElement);
        GalleryItemElement.appendChild(descElement);
        GalleryItemElement.appendChild(techStackElement);        
        
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


