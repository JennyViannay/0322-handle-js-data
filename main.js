const data = [
  {
    title: "Projet 1",
    content: "This is a simple portfolio page",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Projet 2",
    content: "This is a simple portfolio page",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Projet 3",
    content: "This is a simple portfolio page",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Projet 3",
    content: "This is a simple portfolio page",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Profjet 3",
    content: "This is a simple portfolio page",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Profjet 3",
    content: "This is a simple portfolio page",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Profjet 3",
    content: "This is a simple portfolio page",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
];

console.log(data);

data.forEach(project => {
    console.log(project);

    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <img src=${project.image} alt="image d'illustration">
    <h2>${project.title}</h2>
    <p>${project.content}</p>`
    document.querySelector(".projects").appendChild(card);
})

// data[1].map((project) => {
//   console.log(project);
//   const card = document.createElement("div");
//   card.classList.add("card");
//   card.innerHTML = `
//         <img src=${project.image} alt="">
//         <h3>${project.title}</h3>
//         <p>${project.content}</p>
//       `;
//   document.querySelector(".projects").appendChild(card);
// });
