import React, { Suspense, useEffect, useState } from 'react'
import { translateStatsForP, translateStatsForH } from '@/lib/stats'
import styles from '@/styles/Stats.module.css'

type PersonId = number

type Cate = 'pitching' | 'hitting'

type Stats = {
  [K: string]: number | string
}

const getStats = async (personId: PersonId, cate: Cate): Promise<any> => {
  const response = await fetch(
    `https://statsapi.mlb.com/api/v1/people/${personId}/stats?stats=season&group=${cate}`,
  )
  const data = await response.json()

  return data?.stats[0]?.splits[0]?.stat
}

type OwnProps = {
  personId: PersonId
  cate: Cate
}

const Stats: React.FC<OwnProps> = ({ personId, cate }) => {
  const [stats, setStats] = useState<Stats | undefined>({})

  useEffect(() => {
    getStats(personId, cate).then((data) => {
      const afterData = cate === 'pitching' ? translateStatsForP(data) : translateStatsForH(data)
      setStats(afterData)
    })
  }, [personId, cate])

  return (
    <dl className={styles.stats}>
      {stats ? (
        Object.entries(stats).map(([key, val]) => {
          return (
            <div className={styles.stat} key={key}>
              <dt className={styles.statTitle}>{key}</dt>
              <dd className={styles.statValue}>{val}</dd>
            </div>
          )
        })
      ) : (
        <p className={styles.note}>今季メジャー出場なし...😇😇😇</p>
      )}
    </dl>
  )
}

export default Stats
