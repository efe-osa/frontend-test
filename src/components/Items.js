import React from 'react'
import PropTypes from 'prop-types'
import List from './ProviderList'
import Grid from './ProviderGrid'
import Gallery from './ProviderGallery'

const Items = ({ items, viewType }) => {
    const list = items.map((item) => ({ id: item.id, imageUrl: item.images?.[0]?.url, name: item.name, description: item.description }))
    switch (viewType) {
        case 'list':
            return <List items={list} />
        case 'grid':
            return <Grid items={{
                ...list, ...items.map(item => ({
                    address: item.address,
                    providerType: item.provider_type.name
                }))
            }} />
        case 'gallery':
        default:
            return <Gallery items={list} />
    }

}

Items.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        name: PropTypes.string,
        description: PropTypes.string
    })).isRequired,
    viewType: PropTypes.string
}

export default Items
