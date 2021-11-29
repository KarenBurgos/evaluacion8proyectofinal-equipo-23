
export const Button = ({ name, onSubmit }) => {
    
    const navigateHandler = (e) => {
        e.preventDefault();
        console.log("button: ejecutando onSubmit");
        onSubmit();
        
    };

    return (
        <form onSubmit={navigateHandler}>
            <button type="submit"
                className="transition rounded border border-primary duration-300 ease-in-out text-lg text-extrabold uppercase bg-primary hover:bg-primary-dark py-2 px-4 text-gray-100">
                    {name}
            </button>
        </form>
    )
};