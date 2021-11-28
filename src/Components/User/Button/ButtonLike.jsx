
export const ButtonLike = ({ name, onSubmit }) => {
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log("button: ejecutando onSubmit");
        onSubmit();
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <button type="submit"
                className="mt-6 mx-40 transition rounded border border-pink-500 duration-300 ease-in-out text-lg text-extrabold uppercase bg-pink-500 hover:bg-pink-700 py-2 px-4 text-gray-100">
                    {name}
            </button>
        </form>
    )
};