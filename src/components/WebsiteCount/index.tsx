import React, { useEffect, useState } from 'react'
import { jsonp } from 'src/utils/jsonp'

import styles from './styles.module.css'

const SvgViewsArticle = require('@site/static/img/views_article.svg').default
const SvgViewsUser = require('@site/static/img/views_user.svg').default
const SvgViewsSite = require('@site/static/img/views_site.svg').default

interface BusuanziData {
  page_pv: number
  site_pv: number
  site_uv: number
  version: number
}

export default function WebsiteCount(): JSX.Element {
  const [pagePV, setPagePV] = useState<number>(0)
  const [siteUV, setSiteUV] = useState<number>(0)
  const [sitePV, setSitePV] = useState<number>(0)

  const loadData = async () => {
    const data = await jsonp.get<BusuanziData>('//busuanzi.ibruce.info/busuanzi', {
      callbackParam: 'jsonpCallback',
    })
    if (data) {
      setPagePV(data.page_pv)
      setSiteUV(data.site_uv)
      setSitePV(data.site_pv)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className={styles.websiteCount}>
      {/* 所有页面的总访问次数 */}
      <div className={styles.svgSiteCount}>
        <SvgViewsSite />
        <span>{sitePV}</span>
      </div>
      {/* 当前文章访问数量 */}
      <div className={styles.svgSiteCount}>
        <SvgViewsArticle />
        <span>{pagePV}</span>
      </div>
      {/* 站点访客人数 */}
      <div className={styles.svgSiteCount}>
        <SvgViewsUser />
        <span>{siteUV}</span>
      </div>
    </div>
  )
}
