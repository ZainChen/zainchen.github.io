import DocBreadcrumbs from '@theme-original/DocBreadcrumbs'
import React from 'react'
import { WebsiteCount } from 'src/components'

import styles from './styles.module.css'

export default function DocBreadcrumbsWrapper() {
  return (
    <div className={styles.zainBreadcrumbs}>
      <DocBreadcrumbs />
      <WebsiteCount />
    </div>
  )
}
