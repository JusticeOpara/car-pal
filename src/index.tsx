import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Link from 'next/link'
import firebase from "../firebase/firebaseConfig"
import { setUser } from "../redux/authSlice"

const Index = () => {
    const user = useSelector((state: RootState) => state.auth.user)
    const router = useRouter()
    const dispatch = useDispatch
    const [isClient, setIsClient] = useState(false)
    const [message, setMessage] = useState("")


    useEffect(() => {
        setIsClient(true)
    }, [])

    useEffect(() => {

        if (!user && isClient) {
            router.push("/signup")
        }

    }, [user, router, isClient])

    useEffect(() => {

        const checkUserFirebase = () => {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    localStorage.removeItem("user")
                    dispatch(setUser({ email: user.email }))
                } else {
                    dispatch(setUser({ email: null }))
                }
            })
        }
        checkUserFirebase()
    }, [dispatch])
    if (!isClient) {
        return <div> loading..</div>
    }
    if (!user) {
        return null
    }

    const handlEmailVerify = () => {
     const user= firebase.auth.currentUser
     if(user){
        if(user.emailVerified){
            setMessage("your email is verfyed")
        }else{
            setMessage("email is not verfifed")
        }
     }
    }
    return (
        <div>Hello
            {user.email && (
                <p>welcome user {user.email}</p>
            )}

            {!user.email && <Link href="">Go signup</Link>}

            <button onClick={handlEmailVerify}> check email</button>
        </div>

    )
}

export default Index