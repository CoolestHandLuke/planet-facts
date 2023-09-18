import { useState } from 'react';
import hamburgerIcon from '../../assets/icon-hamburger.svg';

import PlanetsList from './PlanetsList';

const Navbar = () => {
    const [btnClicked, setBtnClicked] = useState(false);

    const onClick = () => {
        setBtnClicked((prevState) => !prevState);
    };

    return (
        <>
            <div className={'navbar px-0 border-b-2 border-dark-grey'}>
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
                            <img src={hamburgerIcon} alt="Hamburger button" />
                        </button>
                    </div>
                </div>
            </div>
            {btnClicked && <PlanetsList />}
        </>
    );
};
export default Navbar;
