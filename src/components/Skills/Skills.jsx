
const skills= [
  {
    img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/html-icon.png",
    id: 1,
    title:"HTML"
  },
  {
    img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/css-icon.png",
    id: 2,
    title:"CSS"
  },
  {
    img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/python-programming-language-icon.png",
    id: 3,
    title:"PYTHON"
  },
  
  {
    img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/javascript-programming-language-icon.png",
    id: 5,
    title:"JAVASCRIPT"
  },
  {
    img:'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/node-js-icon.png',
    id:6,
},
{
    img:'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/express-js-icon.png',
    id:7,
},
{
    img:'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/react-js-icon.png',
    id:8,
}
];


import styles from "./Skills.module.css";

export const Skills= () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={skill.img} alt="image" />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};