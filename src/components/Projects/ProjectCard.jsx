import styles from "./ProjectCard.module.css";

export const ProjectCard = (props) => {
  const {project}=props
  const {name,github,image,live}=project

  return (
    <div className={styles.container}>
      <img
        src={image}
        alt={`Image of ${name}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{name}</h3>
      <div className={styles.links}>
        <a href={live} target="_blank" className={styles.link}>
         Live Demo
        </a>
        <a href={github} target="_blank" className={styles.link}>
          Source Code
        </a>
      </div>
    </div>
  );
};
