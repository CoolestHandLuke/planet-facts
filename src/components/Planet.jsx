import { useContext } from 'react';
import ButtonsContainer from './ButtonsContainer';
import PlanetImg from './PlanetImg';
import PlanetInfo from './PlanetInfo';
import DataCards from './DataCards';
import PlanetsContext from '../context/PlanetsContext';

const Planet = () => {
    const { planetsListOpen } = useContext(PlanetsContext);
    if (planetsListOpen) {
        return;
    }

    return (
        <div>
            <ButtonsContainer />
            <PlanetImg />
            <PlanetInfo />
            <DataCards />
        </div>
    );
};
export default Planet;
