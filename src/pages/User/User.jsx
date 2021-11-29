import { useUserContext } from '../../contexts/UserContext'
import { useNavigate } from 'react-router-dom'
import { Logout } from '../../Components/User/Logout/Logout'
import { AllPosts } from './../../Components/User/AllPosts/AllPosts'
import { AllFav } from "./../../Components/User/AllPosts/AllFav"

export default function User() {
    

    return (
        <section className="bg-gradient-to-r from-indigo-600 via-gray-50 to-gray-50">
            <header className="flex flex-row justify-end items-center bg-transparent">
                <Logout />
            </header>
                
                <div>
                    <AllPosts />
                </div>
        </section>
    )
    
}