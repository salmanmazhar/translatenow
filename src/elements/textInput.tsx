import * as React from 'react';

interface ITextInput {
    text: string;
    onTextChange: (text: string) => void;
}

const TextInput: React.SFC <ITextInput> = (props)=>{
    return (
        <input type="text" 
            value={props.text} 
            onChange={(event) => { props.onTextChange(event.target.value) }} />
    )

}

export { TextInput };
