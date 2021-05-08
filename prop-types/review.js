import PropTypes from 'prop-types'

export default PropTypes.shape({
    id: PropTypes.number.isRequired,
    icon: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    username: PropTypes.string,
    location: PropTypes.string,
    review: PropTypes.string,
    rating: PropTypes.number,
})
