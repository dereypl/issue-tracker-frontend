import {ISSUE_STATE} from "../enum/issueState";

export const getIssuePossibleStatuses = (currentState) => {
    switch (currentState) {
        case ISSUE_STATE.OPEN:
            return [ISSUE_STATE.PENDING]
        case ISSUE_STATE.PENDING:
            return [ISSUE_STATE.CLOSED]
        default:
            return [];
    }
}

