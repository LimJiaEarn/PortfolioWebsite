
const ProjectsArray = [ 
    { 
        imagePath: "Images/Project_1T.jpg", 
        companyName: "British America Tobacco"
    }, 
    { 
        imagePath: "Images/Project_2T.jpg", 
        companyName: "Aquarius Soft"
    },
    { 
        imagePath: "Images/Project_3T.jpg", 
        companyName: "Mathnasium"
    },
    { 
        imagePath: "Images/Project_4T.jpg", 
        companyName: "Mindflex"
    },
    { 
        imagePath: "Images/Project_1T.jpg", 
        companyName: "Mindflex"
    },    { 
        imagePath: "Images/Project_2T.jpg", 
        companyName: "Mindflex"
    }
]; 

function MyProjects() { 

    ProjectsArray.map((e) => { 

        const imageElement = document.createElement("img");
        imageElement.src = e.imagePath;
        imageElement.classList = "project-section-gallery-element-image";

        const GalleryItemElement = document.createElement("div");
        GalleryItemElement.classList = "project-section-gallery-element";

        GalleryItemElement.appendChild(imageElement);

        const GalleryElement = document.querySelector(".project-section-gallery");
        GalleryElement.appendChild(GalleryItemElement);
        }); 
    } 

MyProjects();