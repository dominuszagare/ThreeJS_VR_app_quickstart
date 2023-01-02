import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Hiter razvoj',
    description: (
      <>
        Projekt vsebuje ze vse potrebno za interakcijo z navideznim okoljem, preostane le oblikovanje tega navideznega okolja.
      </>
    ),
  },
  {
    title: 'ThreeJS',
    description: (
      <>
        Uporablja knjiznico ThreeJS za izrisovanje in manipulacijo 3D grafike.
      </>
    ),
  },
  {
    title: 'Enostavna distribucija',
    description: (
      <>
        Narejeno aplikacijo je nato enostavno deliti z ostalimi.
      </>
    ),
  },
];
// <Svg className={styles.featureSvg} role="img" />
function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
