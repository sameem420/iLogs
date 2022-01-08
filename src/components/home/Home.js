import React from 'react'
import Form from './Form';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import NotesList from '../notes/NotesList';

function Home() {
    useFirestoreConnect([{ collection: 'notes', orderBy: ['createdAt', 'desc'] }]);
    const notes = useSelector(state => state.firestore.ordered.notes);
    console.log(notes)
    return (
        <div  className="container-fluid">
            <div className="row">
                <div className="col s6">
                    <Form />
                </div>
                <div className="col s6">
                    <NotesList notes={notes} />
                </div>
            </div>
        </div>
    )
}

export default Home
