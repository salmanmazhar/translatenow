import * as React from 'react';

//TODO Move to a separate 
interface IParagrahProps {
    text: string
}

const Paragraph: React.SFC<IParagrahProps> = (props) => {
    return <p>{props.text}</p>
}

export { Paragraph };
