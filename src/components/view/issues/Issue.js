import React, {memo} from 'react';
import {IssueContainer} from "./styles/Issue.styles";
import StateSelector from "./StateSelector";

const Issue = ({data: {state, title, description, _id}}) => {
    return (
        <IssueContainer>
            <StateSelector state={state} id={_id}/>
            <h3>{title}</h3>
            {description}
        </IssueContainer>
    );
};

export default memo(Issue);