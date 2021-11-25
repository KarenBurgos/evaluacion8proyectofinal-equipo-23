import { useUserContext } from '../../contexts/UserContext'
import { useNavigate } from 'react-router-dom'
import user from '../../assets/img/icono-user.jpg'
import { Logout } from '../../Components/User/Logout/Logout'
import { AllPosts } from './../../Components/User/AllPosts/AllPosts'

export default function User() {
    const navigate = useNavigate()
    const { logout } = useUserContext()

    const logoutHandler = () => {
        logout()
        navigate("/login")
    }

    return (
        <section className="bg-gradient-to-r from-indigo-600 via-gray-50 to-gray-50">
            <header className="flex flex-row justify-end items-center bg-transparent">
                <Logout />
            </header>
            <div className="flex gap-4 flex-col justify-around  items-center p-6 lg:p-10 min-h-screen">
                <div className="w-4/5 lg:w-1/2 gap-6 h-full flex flex-col justify-around items-center">
                    <h2 className="text-5xl lg:text-6xl font-extrabold text-black-800 text-center">User page</h2>
                    <h3 className="text-lg font-medium text-gray-700 text-center">An admin role is not required to access this page</h3>

                    <p className="text-xl font-medium text-black-800 text-center mt-6">All users can visit this page if their credentials are valid</p>
                </div>

                <div className="w-4/5 lg:w-1/2 flex justify-center items-center">
                    <img className="w-4/5 rounded-lg" src={user} />
                </div>

                <div>
                    <AllPosts />
                </div>
            </div>
        </section>
    )
    
}