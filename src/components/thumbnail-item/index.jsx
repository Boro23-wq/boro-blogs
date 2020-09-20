import React from 'react'
import { Link } from 'gatsby'
import { TARGET_CLASS } from '../../utils/visible'

import './index.scss'

export const ThumbnailItem = ({ node }) => {
  // console.log(node.excerpt)
  return (
    <Link className={`thumbnail ${TARGET_CLASS}`} to={node.fields.slug}>
      <div key={node.fields.slug}>
        <h3>{node.frontmatter.title || node.fields.slug}</h3>
        <p
          dangerouslySetInnerHTML={{
            __html:
              node.frontmatter.description +
              ' ' +
              node.excerpt.substring(0, 120) +
              '...',
          }}
        />
        {/* <p>{node.frontmatter.description}</p> */}
      </div>
    </Link>
  )
}
