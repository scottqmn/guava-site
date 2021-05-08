import PropTypes from 'prop-types'

export default PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number,
    stock: PropTypes.number,
    image: PropTypes.string,
    description: PropTypes.string,
    vendor_url: PropTypes.string,
})
