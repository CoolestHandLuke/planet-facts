import { useState } from 'react';

import PlanetsList from './PlanetsList';

const Navbar = () => {
    const [btnClicked, setBtnClicked] = useState(false);

    const onClick = () => {
        setBtnClicked((prevState) => !prevState);
    };

    return (
        <>
            <div className="navbar px-0 border-b-2 border-dark-grey">
                <div className="m-auto w-11/12">
                    <div className="flex-1">
                        <h2 className="antonio-h2 uppercase text-white">
                            The Planets
                        </h2>
                    </div>
                    <div className="flex-none">
                        <button
                            onClick={onClick}
                            className="btn btn-square btn-ghost color-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block w-6 h-6 stroke-current text-white active:text-dark-grey"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {btnClicked && <PlanetsList />}
        </>
    );
};
export default Navbar;
