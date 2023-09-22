import { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const PlanetImg = () => {
    const { currentPlanet } = useContext(PlanetsContext);

    return (
        <div className="m-16">
            <img
                className="m-auto"
                src={currentPlanet.images.planet}
                alt="a planet"
            />
        </div>
    );
};
export default PlanetImg;
