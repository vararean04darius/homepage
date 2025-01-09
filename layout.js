// Photo by Mark Rz: https://www.pexels.com/photo/hooded-woman-in-a-neon-mask-from-movie-15104697/
// Photo by NEONROOKIE SAUERLAND: https://www.pexels.com/photo/person-wearing-purge-mask-surrounded-with-orange-smoke-6677772/
const myGrid = document.getElementById("grid");

let myProjects = ["admin", "battleship", "calculator", "pizzeria", "signup", "weather"];
let myPictures = ["./admin.png", "./battleship.png", "./calculator.png", "./pizzeria.png", "./signup.png", "./weather.png"];
// "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ullam, molestias, unde quis incidunt quam culpa officia qui.";
let adminDescription = "This admin panel is a simple project that I created while learning html, js, and especially css.";
let battleshipDescription = "This is a game that I created while learning js and TDD (Test Driven Development). It is only playable locally, single/multiplayer.";
let calculatorDescription = "The calculator was my first 'bigger' project. It taught me a lot about js and also gave me some headaches while trying to make it work. Did you know that 0.1 + 0.2 it's actually 0.3 in JS?";
let pizzeriaDescription = "This pizzeria website was a nice project that helped me think about html as a powerful tool for the css. Also made me understand the giant impact of JavaScript in creating layouts.";
let signupDescription = "The signup form was a project that I created to learn about the importance of validation in forms. It was a nice project that helped me understand the importance of the user experience.";
let weatherDescription = "I spent quite some time doing the weather app project since it taught me how to use API calls and how to extract information from outside the project.";
let descriptons = [adminDescription, battleshipDescription, calculatorDescription, pizzeriaDescription, signupDescription, weatherDescription];
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
  descriptionMessage.textContent = descriptons[i];

  textDescriptionContainer.appendChild(descriptionMessage);
}
