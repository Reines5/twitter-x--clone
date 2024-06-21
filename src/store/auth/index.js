import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    currentAccount: {
        id: 1,
        username: 'freines5',
        fullName: 'Fatih Enes',
        avatar: 'https://pbs.twimg.com/profile_images/1660676786122899457/nJ_DGZtd_400x400.jpg'
    },
    accounts: [
        {
            id: 1,
            username: 'freines5',
            fullName: 'Fatih Enes',
            avatar: 'https://pbs.twimg.com/profile_images/1660676786122899457/nJ_DGZtd_400x400.jpg'
        },
        {
            id: 2,
            username: 'manji',
            fullName: 'Fatih Enes',
            avatar: 'https://pbs.twimg.com/profile_images/1660676786122899457/nJ_DGZtd_400x400.jpg'
        },
    ]
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // state manipulation methods
        _addAccount: (state, action) => {
            state.accounts.push(action.payload)
        },

        _removeAccount: (state, action) => {
            state.accounts = state.accouts.filter(account => account.id !== action.payload)
            if (state.currentAccount && action.payload === state.currentAccount.id) {
                this._setCurrentAccount(false)
            }
        },

        _setCurrentAccount: (state, action) => {
            state.currentAccount = action.payload
        }
    }
})

export const {_addAccount, _setCurrentAccount, _removeAccount} = auth.actions
export default auth.reducer