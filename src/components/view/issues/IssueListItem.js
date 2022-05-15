import React, {memo} from 'react';
import {IssueContainer, StateBadge} from "./IssueListItem.styles";

const IssueListItem = ({data}) => {
    return (
        <IssueContainer>
            <StateBadge>
                {data.state}
            </StateBadge>
            <h3>{data.title}</h3>
            {data.description}
        </IssueContainer>
    );
};

export default memo(IssueListItem);