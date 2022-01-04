import * as React from 'react'
import { useSpring, animated, config } from '@react-spring/web'
import { PageProps } from 'gatsby'

const IndexPage: React.FC<PageProps> = () => {
  const [{ background }] = useSpring(
    () => ({
      from: {
        background: 'var(--from, pink)',
      },
      to: {
        background: 'var(--to, purple)',
      },
      config: config.molasses,
      loop: {
        reverse: true,
      },
    }),
    []
  )
  return (
    <div className="container">
      <animated.div className="block" style={{ background }} />
    </div>
  )
}

export default IndexPage
