import ADMIN from '../../assets/img/soyadmin-img.jpg';
import { Logout } from '../../Components/User/Logout/Logout';
import { Post } from '../../Components/Admin/Post/Post';
import { MyPosts } from '../../Components/Admin/MyPosts/MyPosts';

export default function Admin() {

    return (
        <section>
            <header className="flex flex-row justify-end items-center">
                <Logout />
            </header>
            <div className="flex flex-col justify-around items-center p-6">
                <Post />
            </div>

            <div className="flex justify-center my-5">
                <img className="w-1/3" src={ADMIN} />
            </div>

            <div>
                <MyPosts />
            </div>            

        </section>
    );
};

