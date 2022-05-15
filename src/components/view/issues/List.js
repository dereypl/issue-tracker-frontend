import React from 'react';
import {ListHeader, ListWrapper} from "./styles/List.styles";
import IssueListItem from "./Issue";
import useLoadData from "../../../hooks/useLoadData";
import Loader from "../../shared/Loader";

const List = () => {
    const {items, isLoading} = useLoadData({restUrl: 'issues'})

    return (
        <ListWrapper>
            <Loader isLoading={isLoading}>
                <ListHeader>Click on issue state to change it.</ListHeader>
                {items.map(issue => <IssueListItem data={issue} key={issue._id}/>)}
            </Loader>
        </ListWrapper>
    );
};

export default List;