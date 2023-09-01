/**
 * author : YATIME Marouane
 * app : PFE - TaskPulse software
 * Folder: frontend
 * file:  cardMoule.scss
 */

import styles from "./Card.moule.scss"

const Card = ({children, CardClass}) => {
  return (
    <div className={`${styles.card} ${CardClass}`}>
        {children}
    </div>
  )
};

export default Card;
