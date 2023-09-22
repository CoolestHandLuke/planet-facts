const ButtonsContainer = () => {
    return (
        <div className="flex-auto">
            <div className="grid grid-cols-3 grid-rows-1 gap-4 border-b-2 border-dark-grey">
                <div className="m-auto">
                    <button
                        id="overview"
                        autoFocus
                        className="btn btn-ghost spartan-h3 rounded-none uppercase  bg-background-black focus:text-white "
                    >
                        <div>Overview</div>
                    </button>
                </div>

                <div className="m-auto">
                    <button
                        id="structure"
                        className="btn btn-ghost spartan-h3 rounded-none uppercase bg-background-black focus:text-white"
                    >
                        Structure
                    </button>
                </div>

                <div className="m-auto">
                    <button
                        id="surface"
                        className="btn btn-ghost spartan-h3 rounded-none uppercase bg-background-black focus:text-white"
                    >
                        Surface
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ButtonsContainer;
