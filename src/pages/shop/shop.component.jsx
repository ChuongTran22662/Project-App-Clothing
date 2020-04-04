import React from 'react';
import CollectionsOverviewContainer from '../../components/collection-overview/collection-overview.container'
import { Route } from 'react-router-dom';
import CollectionPageContainer from '../collection/collection.container';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';


class ShopPage extends React.Component {

    // state = {
    //     loading: true
    // }

    // unsubscribeFromSnapshot = null;

    // componentDidMount() {
    //     const { updateCollections } = this.props;
    //     const collectionRef = firestore.collection('collections');

    //     collectionRef.get().then(snapshot => {
    //         const collectionsMap = convertCollectionSnapshotToMap(snapshot);
    //         updateCollections(collectionsMap);
    //         this.setState({ loading: false })
    //     });
    // }

    componentDidMount() {
        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart();
    }

    render() {

        const { match } = this.props;
        //const { loading } = this.state;

        return (
            <div className='shop-page'>
                <Route
                    exact
                    path={`${match.path}`}
                    component={CollectionsOverviewContainer}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    component={CollectionPageContainer}
                />
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    // updateCollections: collectionsMap =>
    //     dispatch(updateCollections(collectionsMap))
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})


export default connect(null, mapDispatchToProps)(ShopPage); 