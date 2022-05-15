import React from 'react';
import {ListHeader, ListWrapper} from "./IssuesList.styles";
import IssueListItem from "./IssueListItem";
import useLoadData from "../../../hooks/useLoadData";
import Loader from "../../shared/Loader";

const IssuesList = () => {
    const {items, isLoading} = useLoadData({restUrl: 'issues'})

    return (
        <ListWrapper>
            <Loader isLoading={isLoading}>
                <ListHeader/>
                {items.map(issue => <IssueListItem data={issue} key={issue._id}/>)}
            </Loader>
        </ListWrapper>
    );
};

export default IssuesList;