
export const Button = () => {
    
    const navigateHandler = (e, operation) => {
        e.preventDefault();


    }


    return (
        <form onSubmit={navigateHandler}>
            <button type="submit"
                className="mt-6 mx-40 transition rounded border border-pink-500 duration-300 ease-in-out text-lg text-extrabold uppercase bg-pink-500 hover:bg-pink-700 py-2 px-4 text-gray-100">
                    {title} {operation}
            </button>
        </form>
    )
};