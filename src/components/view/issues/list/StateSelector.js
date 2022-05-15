import React, {useContext, useRef, useState} from 'react';
import {StateBadge, StateDropdown, StyledDoubleArrowIcon} from "./StateSelector.styles";
import {ISSUE_STATE} from "../../../../enum/issueState";
import {getIssuePossibleState} from "../../../../services/issueService";
import useOutsideClick from "../../../../hooks/useOutsideClick";
import Loader from "../../../shared/Loader";
import {updateItem} from "../../../../services/httpService";
import {IssueListContext} from "./IssuesList";

const StateSelector = ({_id, currentState}) => {
    const ref = useRef();
    const {loadIssues} = useContext(IssueListContext)
    const [isLoading, setIsLoading] = useState(false)
    const [isDropdownVisible, setIsDropdownVisible] = useState(false)

    const toggleDropdownVisibility = () => setIsDropdownVisible(!isDropdownVisible)

    useOutsideClick(ref, () => {
        if (isDropdownVisible) setIsDropdownVisible(false);
    });

    const handleChangeIssueState = async (nextState) => {
        const data = {state: nextState}
        try {
            setIsLoading(true)
            setIsDropdownVisible(false);
            await updateItem({restUrl: 'issues', id: _id, data})
            loadIssues()
        } catch (e) {
            console.error(`Failed to change issue state!`)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <StateBadge state={currentState} ref={ref}>
            <Loader isLoading={isLoading}>
                <>
                    {currentState}
                    {currentState !== ISSUE_STATE.CLOSED &&
                        <StyledDoubleArrowIcon open={isDropdownVisible} onClick={toggleDropdownVisibility}/>}
                </>
            </Loader>
            {isDropdownVisible &&
                <StateDropdown>
                    {getIssuePossibleState(currentState)
                        .map(state => <p key={state} onClick={() => handleChangeIssueState(state)}>{state}</p>)
                    }
                </StateDropdown>
            }
        </StateBadge>
    );
};

export default StateSelector;