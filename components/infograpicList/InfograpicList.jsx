import React from 'react'
import styles from './InfograpicList.module.scss'

const InfograpicList = ({data}) => {
 
  const articles = data.map((item, i) => {

    return (
      <article className={`${styles.article} ${styles[`item-${i + 1}`]}`} key={i}>
        <h3 className={styles.h3}>{item.title}</h3>
        <p className={`${styles.p} text-base font-light pt-2`}>{item.ptext}</p>
      </article>
    );
  });



  return <main className={styles.main}>
    <div className={`${styles.body} p-5`}>
      {articles}
    </div>
  </main>;
}

export default InfograpicList