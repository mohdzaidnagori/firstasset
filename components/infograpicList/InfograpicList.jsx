import React from 'react'
import styles from './InfograpicList.module.scss'

const InfograpicList = () => {
  const data = [
    {
      img:'"../../public/assets/icons/imageedit_2_5602005075.png"',
      title: 'END TO END',
      ptext: "FIRST/ASSET’s tech enabled platform handles the entire life cycle of the property including identification, identification, acquisition, asset management management (Lease Negotiation &amp; Management and Asset Maintenance) &amp; eventual sale (Asset Valuation &amp; Sale Negotiations).",
    },
    {
      img:'../../public/assets/icons/bg-sidebar-desktop.svg',
      title: 'RESEARCH DRIVEN',
      ptext: 'Research driven investment approach using quantitative analytics in Asset Identification via insights on properties, locations, pricing and building specifications.',
    },
    {
      img:'../../public/assets/icons/bg-sidebar-desktop.svg',
      title: 'RISK / DUE DILIGENCE',
      ptext: 'We follow an exhaustive selection process of both Asset and Occupier to mitigate any Asset related risks. Our legal &amp; valuation partners are the best in the industry.',
    },
    {
      img:'"../../public/assets/icons/bg-sidebar-desktop.svg"',
      title: 'EASE OF INVESTING',
      ptext: 'Invest in curated opportunities ONLINE (no physical paperwork) with complete documentation including Asset Registration, Document Safe keeping &amp; Document Digitalisation.',
    },
    {
      img:'../../public/assets/icons/bg-sidebar-desktop.svg',
      title: 'REPORTING/VALUATIONS',
      ptext: 'Post investment, we continue to make sure that the upkeep of the asset is looked after by our team, coupled with regular inspections. Periodic valuations and reporting keeps you updated on rental flows and capital appreciation.',
    },
    {
      img:'/assets/icons/bg-sidebar-desktop.svg',
      title: 'LIQUIDATION',
      ptext: 'Further, should you wish to liquidate your investments at some point, we help you find a buyer through a secondary sale, in the private market through our extensive network.',
    },
    {
      img:'/assets/icons/bg-sidebar-desktop.svg',
      title: 'CORPORATE GOVERNANCE',
      ptext: 'Streamlined investment process, with high level of corporate governance and disclosures.',
    },
  ];

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