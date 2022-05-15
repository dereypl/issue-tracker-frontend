import React from 'react';
import {ListHeader, ListWrapper} from "./IssuesList.styles";
import IssueListItem from "./IssueListItem";

const MOCK_ISSUES = [1, 2, 3, 4, 5];

const IssuesList = () => {
    return (
        <ListWrapper>
            <ListHeader/>
            {MOCK_ISSUES.map(issue => <IssueListItem key={issue}/>)}
        </ListWrapper>
    );
};

export default IssuesList;