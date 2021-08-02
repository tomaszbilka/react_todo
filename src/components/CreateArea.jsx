import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea ( props ) {

    const [ newNote, setNewNote ] = useState( {
        title: "",
        content: ""
    } );

    const [ isExpanded, setIsExpanded ] = useState( false );

    function handleChange ( event ) {
        const { name, value } = event.target;
        setNewNote( prevValue => {
            return {
                ...prevValue,
                [ name ]: value
            }
        } );
    }

    function expand () {
        setIsExpanded( true );
    }


    return (
        <div>
            <form className="create-note">
                { isExpanded && (
                    <input onChange={ handleChange } name="title" placeholder="Title" value={ newNote.title } />
                ) }
                <textarea onClick={ expand } onChange={ handleChange } name="content" placeholder="Take a note..." rows={ isExpanded ? "3" : "1" } value={ newNote.content } />
                <Zoom in={ isExpanded }>
                    <Fab type="button"
                        onClick={ () => {
                            props.onAdd( newNote );
                            setNewNote( { title: "", content: "" } );
                            setIsExpanded( false );
                        } }>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;