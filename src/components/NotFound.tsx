import React, { FC } from 'react'
import { Link } from 'react-router-dom'

export const NotFound: FC = () => {
  return (
    <>
      <article>Step not found</article>
      <div>
        <Link to="/">Back to home</Link>
      </div>
    </>
  )
}
