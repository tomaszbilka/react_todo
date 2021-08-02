import React, { useState } from "react";
import Header from "./Header"
import Footer from "./Footer";
import { Note } from "./Note";
import CreateArea from "./CreateArea";

function App () {

    const [ notes, setNotes ] = useState( [] );

    function addNotes ( newNote ) {
        setNotes( prevValue => [ ...prevValue, newNote ] );
    };

    function deleteNote ( id ) {
        setNotes( prevNotes => {
            return prevNotes.filter( ( notes, index ) => {
                return index !== id;
            } );
        } );
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={ addNotes } />
            { notes.map( ( el, index ) => (
                <Note
                    key={ index }
                    id={ index }
                    title={ el.title }
                    content={ el.content }
                    onDelete={ deleteNote }
                />
            ) ) }
            <Footer />
        </div>
    )
}

export default App;

