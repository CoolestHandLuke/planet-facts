import { useState, useContext } from 'react';
import hamburgerIcon from '../../assets/icon-hamburger.svg';
import PlanetsList from './PlanetsList';
import PlanetsContext from '../context/PlanetsContext';

const Navbar = () => {
    const { togglePlanetsList, planetsListOpen } = useContext(PlanetsContext);

    const onClick = () => {
        togglePlanetsList();
    };

    return (
        <>
            <div className={'navbar px-0 border-b-2 border-dark-grey'}>
                <div className="m-auto w-screen">
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
            {planetsListOpen && <PlanetsList />}
        </>
    );
};
export default Navbar;
