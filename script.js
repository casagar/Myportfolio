const myProjects = ["Project One", "Project Two", "Project Three"];

myProjects.forEach(function(ProjectName){
    
    console.log(ProjectName);
})



//const scores = [88, 92, 100, 75, 98];

//const passingScores = scores.filter (function(score){
    // if 'score >= 90' is true , the score will be included in the new array.
   
  //  return score >= 90;
    
//})
  //  console.log("ALl Scores:", scores);
    //console.log("Passing Scores only:", passingScores);

    //const person = { 
      //  name: "Sagar",
       // age: 30,
        //isStudent: false,
        //jobTitle: "Developer"
    //};
    //console.log(person)

 //   const Projects = [
   //     { title: "Project One", status: "Complete", hours:40 },
     //   { title: "Project Two", status: "In Progress", hours:80 },
       // { title: "Project Three", status: "Complete", hours:60 },
    //];
    //lets find just tile for complete projects
    
    //const completedProjectTitles = Projects.filter(function(projects){
        //first we will get projects which are completed only
      //  return projects.status === "Complete";
   // })
    //.map(function(projects){
        //now we will get mapped title of all returned items which are already filtered to complete
      //  return projects.title;  
    //});

//    console.log(completedProjectTitles);



// the array of the project objevts
const projects = [
    {title: "Project One", status: "Complete", hours: 40},
    {title: "Project Two", status: "In Progress", hours: 80},
    {title: "Project Three", status: "Complete", hours: 60},
];

// select the empty container on the page
const projectsContainer = document.querySelector('.projects-container');

//loop thru the project array
projects.forEach(function(project){
    //create new div for card
    const card = document.createElement('div');
    card.classList.add('project-card'); //add the css class for stying

    //create the h3 for the title
    const title = document.createElement('h3');
    title.textContent = project.title;

    // create the p for the status
    const status = document.createElement('p');
    status.textContent = `Status: ${project.status}`;
    
    // put the title and status inside the card
    card.appendChild(title);
    card.appendChild(status);
    
    //put the finished card into the container on the page
    projectsContainer.appendChild(card);
});