// Photo by Mark Rz: https://www.pexels.com/photo/hooded-woman-in-a-neon-mask-from-movie-15104697/
// Photo by NEONROOKIE SAUERLAND: https://www.pexels.com/photo/person-wearing-purge-mask-surrounded-with-orange-smoke-6677772/
const myGrid = document.getElementById("grid");

let myProjects = ["admin", "battleship", "calculator", "pizzeria", "signup", "weather"];
let myPictures = ["./admin.png", "./battleship.png", "./calculator.png", "./pizzeria.png", "./signup.png", "./weather.png"];
let descriptons =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ullam, molestias, unde quis incidunt quam culpa officia qui.";

for (let i = 0; i < 6; i++) {
  const square = document.createElement("div");
  square.classList.add("card");
  myGrid.appendChild(square);

  const cardWrapper = document.createElement("div");
  cardWrapper.classList.add("card-wrapper");
  square.appendChild(cardWrapper);

  const pictureDiv = document.createElement("div");
  pictureDiv.classList.add("picture");
  pictureDiv.style.background = `url(${myPictures[i]}) no-repeat center`;

  const projectDescription = document.createElement("div");
  projectDescription.classList.add("project-description");

  const titleContainer = document.createElement("div");
  titleContainer.classList.add("project-title-container");

  const iconContainer = document.createElement("div");
  iconContainer.classList.add("icon-container");

  const firstIcon = document.createElement("img");
  firstIcon.classList.add("title-icons");
  firstIcon.src = "./github-original.svg";
  const secondIcon = document.createElement("img");
  secondIcon.classList.add("title-icons");
  secondIcon.src = "newtab.svg";

  iconContainer.appendChild(firstIcon);
  iconContainer.appendChild(secondIcon);

  cardWrapper.appendChild(pictureDiv);
  cardWrapper.appendChild(projectDescription);

  const projectTitle = document.createElement("p");
  projectTitle.classList.add("project-title");
  projectTitle.textContent = myProjects[i];
  titleContainer.appendChild(projectTitle);
  titleContainer.appendChild(iconContainer);

  const textDescriptionContainer = document.createElement("div");
  textDescriptionContainer.classList.add("description-container");

  projectDescription.appendChild(titleContainer);
  projectDescription.appendChild(textDescriptionContainer);

  const descriptionMessage = document.createElement("p");
  descriptionMessage.classList.add("description-message");
  descriptionMessage.textContent = descriptons;

  textDescriptionContainer.appendChild(descriptionMessage);
}
