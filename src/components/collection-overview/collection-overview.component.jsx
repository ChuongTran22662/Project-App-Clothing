import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../preview-collection/collection-preview.component';
import './collection-overview.styles.scss';
import { selectCollectionForPreview } from '../../redux/shop/shop.selectors';

const collectionsOverview = ({ collections }) => {
    return (
        <div className='collections-overview'>
            {
                collections.map(({ id, ...otherCollectionProps }) => {
                    return (
                        (
                            <CollectionPreview key={id} {...otherCollectionProps} />
                        )
                    )
                })
            }
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(collectionsOverview); 