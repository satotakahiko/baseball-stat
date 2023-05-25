import React from 'react'
import Stats from '@/pages/components/Stats'
import type { Contents } from '@/pages/index'
import styles from '@/styles/Card.module.css'

type OwnProps = {
  players: Contents
}

const Card: React.FC<OwnProps> = ({ players }) => {
  return (
    <div className={styles.cards}>
      {players
        ? players.map((player) => {
            const { id, personId, player_name, group, league, team, image } = player
            const category =
              group.length > 1 ? 'Two-Way-Player' : group[0] === 'hitting' ? 'Fielder' : 'Pitcher'

            return (
              <div className={styles.wrapCard} key={id}>
                <div className={styles.card}>
                  <div className={styles.wrapImg}>
                    <img
                      src={image.url}
                      alt={`${player_name}選手の画像`}
                      width={image.width * 0.35}
                      height={image.height * 0.35}
                      className={styles.img}
                    />
                  </div>
                  <p className={styles.league}>{league}</p>
                  <p className={styles.team}>{team}</p>
                  <p className={styles.category}>{category}</p>
                  <h2 className={styles.playerName}>{player_name}</h2>
                  <div className={styles.wrapStats}>
                    {group.map((cate) => {
                      return (
                        <div key={cate}>
                          <h3 className={styles.statsCate}>
                            {cate === 'hitting' ? 'Hitting Stats' : 'Pitching Stats'}
                          </h3>
                          <Stats personId={personId} cate={cate} />
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })
        : ''}
    </div>
  )
}

export default Card
