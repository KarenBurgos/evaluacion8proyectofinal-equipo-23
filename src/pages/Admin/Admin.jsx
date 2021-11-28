import { Logout } from '../../Components/User/Logout/Logout';
import { Post } from '../../Components/Admin/Post/Post';
import { MyPosts } from '../../Components/Admin/MyPosts/MyPosts';

export default function Admin() {

    return (
        <section className="bg-gradient-to-bl from-pink-100 to-indigo-100">
            <header className="flex flex-row justify-end items-center">
                <Logout />
            </header>
            <div className="flex flex-col justify-around items-center p-6">
                <Post name="Crear un post" />
            </div>

            <div>
                <MyPosts />
            </div>            

        </section>
    );
};

