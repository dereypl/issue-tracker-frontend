import React, {memo} from 'react';
import {ItemContainer} from "./IssueListItem.styles";

const IssueListItem = ({data}) => {
    return (
        <ItemContainer>
            {data.title}
        </ItemContainer>
    );
};

export default memo(IssueListItem);