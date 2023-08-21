import PropTypes from 'prop-types'

function Layout({children}) {
  return <div className='layout'>{children}</div>
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}

export default Layout