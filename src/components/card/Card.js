/**
 * author : YATIME Marouane
 * app : PFE - TaskPulse software
 * Folder: frontend
 * file:  cardMoule.scss
 */

import styles from "./Card.module.scss"

const Card = ({children, cardClass}) => {
  return (
    <div className={`${styles.card} ${cardClass}`}>
        {children}
    </div>
  )
};


export default Card;


