
const ProjectsArray = [ 
    { 
        imagePath: "Images/Project_1T.jpg", 
        companyName: "Retirement Planner"
    }, 
    { 
        imagePath: "Images/Project_2T.jpg", 
        companyName: "Macro Enhanced Excels"
    },
    { 
        imagePath: "Images/Project_3T.jpg", 
        companyName: "Personal Finance Calendar"
    },
    { 
        imagePath: "Images/Project_4T.jpg", 
        companyName: "Disk Based Frequent Item Miner"
    },
    { 
        imagePath: "Images/Project_1T.jpg", 
        companyName: "Career Navigator"
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


