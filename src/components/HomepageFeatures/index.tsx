import clsx from 'clsx'
import React from 'react'

import styles from './styles.module.css'

type FeatureItem = {
  key: number
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    key: 1,
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Zain Docusaurus was designed from the ground up to be easily installed and used to get your website up and
        running quickly.
      </>
    ),
  },
  {
    key: 2,
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go ahead and move your docs into the{' '}
        <code>docs</code> directory.
      </>
    ),
  },
  {
    key: 3,
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same
        header and footer.
      </>
    ),
  },
]

interface FeatureItemProps {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: JSX.Element
}

function Feature(props: FeatureItemProps) {
  const { title, Svg, description } = props

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((item) => (
            <Feature key={item.key} title={item.title} Svg={item.Svg} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  )
}
