import React from 'react';
import {ListHeader, ListWrapper} from "./IssuesList.styles";
import IssueListItem from "./IssueListItem";
import useLoadData from "../../../hooks/useLoadData";

const IssuesList = () => {
    const {items} = useLoadData({restUrl: 'issues'})

    return (
        <ListWrapper>
            <ListHeader/>
            {items.map(issue => <IssueListItem data={issue} key={issue._id}/>)}
        </ListWrapper>
    );
};

export default IssuesList;