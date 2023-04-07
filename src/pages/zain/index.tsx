import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import React from 'react'
import { WebsiteCount } from 'src/components'

export default function Zain(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      jane
      <main>
        zain
        <br />
        <WebsiteCount />
      </main>
    </Layout>
  )
}
