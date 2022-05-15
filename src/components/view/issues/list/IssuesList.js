import React, {createContext, useState} from 'react';
import {ListHeader, ListWrapper} from "./IssuesList.styles";
import IssueListItem from "./Issue";
import useLoadData from "../../../../hooks/useLoadData";
import Loader from "../../../shared/Loader";
import AddIssueModal from "../modal/AddIssueModal";
import {AddIssueContainer, StyledAddCircleOutlineIcon} from "./Issue.styles";

export const IssueListContext = createContext({});

const IssuesList = () => {
    const [addIssueModalVisible, setAddIssueModalVisible] = useState(false)
    const {items, isLoading, loadData: loadIssues} = useLoadData({restUrl: 'issues'})

    return (
        <IssueListContext.Provider value={{loadIssues, setAddIssueModalVisible}}>
            <ListWrapper>
                <Loader isLoading={isLoading}>
                    <ListHeader>Click on issue state to change it.</ListHeader>
                    <AddIssueContainer onClick={() => setAddIssueModalVisible(true)}>
                        <StyledAddCircleOutlineIcon fontSize={"inherit"}/>
                        <p>Create issue</p>
                    </AddIssueContainer>
                    {items.map(issue => <IssueListItem data={issue} key={issue._id}/>)}
                </Loader>
            </ListWrapper>
            {addIssueModalVisible && <AddIssueModal/>}
        </IssueListContext.Provider>
    );
};

export default IssuesList;