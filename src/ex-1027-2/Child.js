import PropTypes from 'prop-types'
function Child({ firstName, lastName }) {
  return (
    <>
      <h1>
        {firstName},{lastName}
      </h1>
    </>
  )
}
Child.defaultProps = {
  firstName: 'Eddy',
  lastName: 'Chang',
}

Child.propTypes = {
  firstName: PropTypes.string.isRequired,
  lasttName: PropTypes.string.isRequired,
}
export default Child
