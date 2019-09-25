import * as React from 'react';

//TODO separate interfaces
interface IParagrahProps {
    text: string
}

const Paragraph: React.SFC<IParagrahProps> = (props) => {
    return <p>{props.text}</p>
}

export default Paragraph;
