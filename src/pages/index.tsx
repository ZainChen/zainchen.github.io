import Link from '@docusaurus/Link'
import Translate from '@docusaurus/Translate'
import useBaseUrl from '@docusaurus/useBaseUrl'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { animated, useSpring, useTrail } from '@react-spring/web'
// import HomeHeaderLogo from '@site/static/img/home_header_logo.svg'
import Layout from '@theme/Layout'
import clsx from 'clsx'
import React from 'react'

// import HomepageFeatures from 'src/components/HomepageFeatures'
import styles from './index.module.css'

function HomepageHeader() {
  const animatedTexts = useTrail(3, {
    from: { opacity: 0, transform: 'translateY(3em)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: {
      mass: 3,
      friction: 45,
      tension: 460,
    },
    delay: 200,
  })

  const animatedImage = useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(8em)' },
    config: { mass: 2, tension: 260, friction: 30 },
    delay: 200,
  })

  return (
    <header className={clsx('home-header', styles.homepageHeader)}>
      <div className={styles.homeHeaderMiddle}>
        <div className={styles.homeHeaderIntroduction}>
          <div>
            <animated.div style={animatedTexts[0]}>
              <h1>
                <Translate id="homepage.title" description="The homepage welcome message">
                  Hi, I am Zain
                </Translate>
              </h1>
            </animated.div>
            <animated.div style={animatedTexts[1]}>
              <p>
                <Translate id="homepage.description" description="The homepage description">
                  Record all the things that interest me.
                </Translate>
              </p>
            </animated.div>
            <animated.div style={animatedTexts[2]}>
              <Link className="button button--secondary button--lg" to="https://zainjane.com/zaindoc">
                Zaindoc
              </Link>
            </animated.div>
          </div>
        </div>
        <div className={styles.homeHeaderLogo}>
          <animated.img
            className={styles.homeHeaderImg}
            style={animatedImage}
            src={useBaseUrl('img/home_header_logo.svg')}
          />
          {/* <HomeHeaderLogo className={styles.homeHeaderLogo} /> */}
        </div>
      </div>
    </header>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Record all the things that interest me">
      <HomepageHeader />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  )
}
