import { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const PlanetImg = () => {
    const { currentPlanet } = useContext(PlanetsContext);

    return (
        <div className="mx-auto ">
            <div className="m-auto max-w-[290px] h-auto">
                <img
                    className="object-cover"
                    src={currentPlanet.images.planet}
                    alt="a planet"
                />
            </div>
        </div>
    );
};
export default PlanetImg;
