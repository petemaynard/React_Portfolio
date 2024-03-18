import React from 'react';

const Project = () => {
const projectsData = [
   {
      "repoTitle": "Stock Portfolio (wolf.io)",
      "repoLink": "https://github.com/KDeLaria/stock-portfolio-app",
      "repoDesc": "A React-based site that tracks stock portfolios.",
      "repoImage": "../../stock.png",
      "deployLink": ""
   },
   {
      "repoTitle": "Bartending School",
      "repoLink": "https://github.com/KDeLaria/bartending-school",
      "repoDesc": "Quiz format to test your knowledge on the ingredients in popular drinks",
      "repoImage": "../../bartender.png",
      "deployLink": "https://kdelaria.github.io/bartending-school/"
   },
   {
      "repoTitle": "Ticket Wizard",
      "repoLink": "https://github.com/petemaynard/ticket_wizard",
      "repoDesc": "Similar to TicketMaster, a site where you can find (fake) concerts and purchase tickets",
      "repoImage": "../../ticketwizard.png",
      "deployLink": "https://ticket-wizard-pete-b1e8f95fed38.herokuapp.com/"
   }
]


   return (
      <header className="bg-gray-800 text-black text-center p-2">
         <div className="container mx-auto">
            {projectsData.map((portfolio) => (
               <div className="card" style={{width: '600px'}} key={portfolio.repoTitle}>
                  <img className="card-img-top" src={portfolio.repoImage} alt="Card cap image" />
                  <div className="card-body">
                     <h4 className="card-title">{portfolio.repoTitle}</h4>
                     <p className="card-text">{portfolio.repoDesc}</p>
                     <a href={portfolio.repoLink}>Github Respository</a>
                     <br></br>
                     <a href={portfolio.deployLink}>Deployed App</a>
                  </div>
               </div>
            ))}
         </div>
      </header>
   );
};

export default Project;