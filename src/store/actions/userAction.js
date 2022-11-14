import { ActionTypes } from "../constants/action-types"
import axios from 'axios'
import userApi from "../../api/userApi";

export const fetchUsers = () => {

    return async (dispatch) => {
        const response = await userApi.get("/users")
        dispatch({
            type: ActionTypes.FETCH_USERS,
            payload: response.data,
        })
    }

}

export const updateUser = (id, status) => {
    return async (dispatch) => {
        const response = await userApi.put(`/users/${id}`, { active: status })
        console.log('sfddfs', status)
        dispatch({
            type: ActionTypes.UPDATE_USER_STATUS,
            payload: response,
        })
    }
}

