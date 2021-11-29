export const ButtonActive = ({ name, onSubmit }) => {
    
    const navigateHandler = (e) => {
        e.preventDefault();
        console.log("clic boton");
        
        onSubmit();
        
    };

    return (
        <form onSubmit={navigateHandler}>
            <button type="submit"
                className="transition rounded border border-pink-500 duration-300 ease-in-out text-lg text-extrabold uppercase bg-pink-500 hover:bg-pink-700 py-2 px-4 text-gray-100">
                    {name}
            </button>
        </form>
    )
};