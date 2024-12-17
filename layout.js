
console.log("hello!");
// Photo by Mark Rz: https://www.pexels.com/photo/hooded-woman-in-a-neon-mask-from-movie-15104697/
// Photo by NEONROOKIE SAUERLAND: https://www.pexels.com/photo/person-wearing-purge-mask-surrounded-with-orange-smoke-6677772/
const myGrid = document.getElementById("grid");

let myProjects = ["first", "second", "third", "fourth", "fifth", "sixth"];

for(let i = 0; i<6; i++) {
    const square = document.createElement("div")
    square.classList.add("card")
    myGrid.appendChild(square);

    const cardWrapper = document.createElement("div")
    cardWrapper.classList.add("card-wrapper")
    square.appendChild(cardWrapper)

    const pictureDiv = document.createElement("div")
    pictureDiv.classList.add("picture")
    const ss = document.createElement("p")
    ss.textContent = "screenshot of project";
    ss.classList = "filler-text"
    pictureDiv.appendChild(ss)

    const projectDescription = document.createElement("div")
    projectDescription.classList.add("project-description")
    cardWrapper.appendChild(pictureDiv)
    cardWrapper.appendChild(projectDescription)

    const projectTitle = document.createElement("p")
    projectTitle.classList.add("project-title")
    projectTitle.textContent = myProjects[i];
    projectDescription.appendChild(projectTitle);

}