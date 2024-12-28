

import styles from "./Projects.module.css";

import { ProjectCard } from "./ProjectCard";


const projects = [

  {
    name: 'Spotify Clone',
    image: 'https://github.com/CodeCompleteYT/react-portfolio/blob/main/assets/projects/project.png?raw=true',
    github: 'https://github.com/velmareddyanjithreddy/Spotify-Clone',
    live: 'https://anjithspotify.ccbp.tech'
  },
  {
    name: 'Jobby App',
    image: 'https://github.com/CodeCompleteYT/react-portfolio/blob/main/assets/projects/project.png?raw=true',
    github: 'https://github.com/velmareddyanjithreddy/Jobby-App',
    live: 'https://anjithjobby.ccbp.tech'
  },
  {
    name: 'Nxt Trendz',
    image: 'https://github.com/CodeCompleteYT/react-portfolio/blob/main/assets/projects/project.png?raw=true',
    github: 'https://github.com/velmareddyanjithreddy/Nxt-Trendz-ECommerce-Clone',
    live: 'https://anjithnxttrendz.ccbp.tech'
  },
  // Add more projects here...
];

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};