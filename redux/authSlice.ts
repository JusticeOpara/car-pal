import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface AuthState {
    user: { email: string | null };
    loading: boolean;
    error: string | null;
}

const isLoaclStorageAvailble = (): boolean => {
    try {
        localStorage.setItem("test", "test")
        localStorage.removeItem("test")
        return true

    } catch {
        return false
    }
}
const getUserFromLocalStroage = (): { email: string | null } => {

    if (isLoaclStorageAvailble()) {
        const userString = localStorage.getItem('user')
        if (userString) {
            return JSON.parse(userString)
        }
    }
    return { email: null }

}

const initialState: AuthState = {
    user: getUserFromLocalStroage(),
    loading: false,
    error: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        },
        setUser: (state, action: PayloadAction<{email:string}>)=>{
            state.user = action.payload
            if(isLoaclStorageAvailble()){
             localStorage.setItem('user',JSON.stringify(action.payload))
            }
        },
        setError: (state,  action: PayloadAction<string | null>)=>{
            state.error = action.payload

        }
    }
})

export const {setLoading,setUser} = authSlice.actions
export default authSlice.reducer