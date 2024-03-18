import React from 'react';

const Project = () => {
const projectsData = [
   {
      "repoTitle": "Social Networking",
      "repoLink": "https://github.com/petemaynard/social_network_api",
      "repoDesc": "What it is",
      "repoImage": "../../social.png"
   },
   {
      "repoTitle": "Bartending School",
      "repoLink": "https://github.com/KDeLaria/bartending-school",
      "repoDesc": "Quiz format to test your knowledge on the ingredients in popular drinks",
      "repoImage": "../../bartender.png"
   },
   {
      "repoTitle": "Ticket Wizard",
      "repoLink": "https://github.com/petemaynard/ticket_wizard",
      "repoDesc": "Similar to TicketMaster, a site where you can find (fake) concerts and purchase tickets",
      "repoImage": "../../ticketwizard.png"
   },
   {
      "repoTitle": "Project D",
      "repoLink": "http",
      "repoDesc": "What it is",
      "repoImage": ""
   },
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
                     <a href={portfolio.repoLink}>{portfolio.repoTitle}</a>
                  </div>
               </div>
            ))}
         </div>
      </header>
   );
};

export default Project;