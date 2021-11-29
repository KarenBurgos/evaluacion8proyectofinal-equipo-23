import { useNavigate } from "react-router";
import { useUserContext } from "../../../contexts/UserContext";

export const Logout = () => {
    const { logout } = useUserContext();
    const navigate = useNavigate();

    const logoutHandler = () => {
        logout()
        navigate("/login")
    }

    return (
        <button onClick={logoutHandler} className=" m-4 transition rounded border border-primary duration-300 ease-in-out text-sm text-extrabold uppercase bg-primary hover:bg-primary-dark py-2 px-4 text-gray-100">
            Log out
        </button>
    );
};