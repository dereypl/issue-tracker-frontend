import React, {createContext} from 'react';
import {ListHeader, ListWrapper} from "./List.styles";
import IssueListItem from "./Issue";
import useLoadData from "../../../hooks/useLoadData";
import Loader from "../../shared/Loader";
export const IssueListContext = createContext({});

const List = () => {
    const {items, isLoading, loadData: loadIssues} = useLoadData({restUrl: 'issues'})

    return (
        <IssueListContext.Provider value={{loadIssues}}>
            <ListWrapper>
                <Loader isLoading={isLoading}>
                    <ListHeader>Click on issue state to change it.</ListHeader>
                    {items.map(issue => <IssueListItem data={issue} key={issue._id}/>)}
                </Loader>
            </ListWrapper>
        </IssueListContext.Provider>
    );
};

export default List;