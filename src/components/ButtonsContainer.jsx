const ButtonsContainer = () => {
    return (
        <div className="grid grid-cols-3 grid-rows-1 gap-4 border-b-2 border-dark-grey">
            <button
                id="overview"
                autoFocus
                className="relative btn btn-ghost spartan-h3 uppercase bg-background-black focus:text-white "
            >
                <div>Overview</div>
            </button>

            <button
                id="structure"
                className="btn btn-ghost spartan-h3 uppsercase bg-background-black focus:text-white"
            >
                Structure
            </button>
            <button
                id="surface"
                className="btn btn-ghost spartan-h3 uppercase bg-background-black focus:text-white"
            >
                Surface
            </button>
        </div>
    );
};
export default ButtonsContainer;
