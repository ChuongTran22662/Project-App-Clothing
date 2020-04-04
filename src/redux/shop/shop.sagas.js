import { takeLatest, call, put } from 'redux-saga/effects';

import ShopActionsTypes from './shop.types';

import { firestore, convertCollectionSnapshotToMap } from '../../components/firebase/firebase.utils';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

export function* fetchCollectionsAsync() {
    yield console.log('i am fired');

    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap))
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }

    // const collectionRef = firestore.collection('collections');

    // collectionRef.get().then(snapshot => {
    //     const collectionsMap = convertCollectionSnapshotToMap(snapshot);
    //     dispatch(fetchCollectionsSuccess(collectionsMap))
    // }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionsTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    )
};