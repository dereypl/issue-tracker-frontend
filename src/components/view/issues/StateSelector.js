import React from 'react';
import {StateBadge, StyledDoubleArrowIcon} from "./styles/StateSelector.styles";
import {ISSUE_STATE} from "../../../enum/issueState";


const StateSelector = ({state}) => {
    return (
        <StateBadge state={state}>
            {state}
            {state !== ISSUE_STATE.CLOSED && <StyledDoubleArrowIcon/>}
        </StateBadge>
    );
};

export default StateSelector;