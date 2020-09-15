import { withRouter } from 'next/router'
import Link from 'next/link'
import React, { Children } from 'react'

const ActiveLink = ({ router, children, ...props }) => {
  const child = Children.only(children)

  let className = child.props.className || null
  if (router.pathname === props.href && props.activeclassname) {
    className = `${className !== null ? className : ''} ${props.activeclassname}`.trim()
  }

  delete props.activeclassname

  return <Link {...props}>{React.cloneElement(child, { className })}</Link>
}

export default withRouter(ActiveLink)