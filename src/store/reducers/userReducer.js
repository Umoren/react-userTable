import { ActionTypes } from "../constants/action-types";

const initialState = {
    users: [{ id: 1, name: "test", email: "test@email.com", type: "supervisor", active: true }]
}

// TODO: Add Loading state

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.FETCH_USERS:
            return { ...state, users: payload };
        case ActionTypes.UPDATE_USER_STATUS:
            return { ...state, status: payload }
        default:
            return state;
    }
}