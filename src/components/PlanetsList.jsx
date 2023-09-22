import { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import { planets } from '../../data';
import chevronRight from '../../assets/icon-chevron.svg';

const PlanetsList = () => {
    const { handlePlanetChange } = useContext(PlanetsContext);
    return (
        <div className="absolute w-full">
            <div className="relative grid grid-cols-1 divide-y divide-dark-grey bg-background-black">
                {planets.map((planet, index) => {
                    const { name } = planet;

                    return (
                        <div
                            key={index}
                            onClick={() => handlePlanetChange(name)}
                            className="flex h-16 mx-auto w-11/12 hover:cursor-pointer"
                        >
                            <div className="flex-1 m-auto">
                                <div className="inline-flex">
                                    <div
                                        className={`m-auto mr-4 w-4 h-4 rounded-full bg-${name.toLowerCase()}`}
                                    ></div>
                                    <p className="spartan-h3 text-white m-auto uppercase">
                                        {name}
                                    </p>
                                </div>
                            </div>
                            <div className="flex-0 m-auto">
                                <img src={chevronRight} alt="Chevron Right" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default PlanetsList;
