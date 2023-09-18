import ButtonsContainer from './ButtonsContainer';
import PlanetImg from './PlanetImg';
import PlanetInfo from './PlanetInfo';
import DataCards from './DataCards';

const Planet = () => {
    return (
        <>
            <ButtonsContainer />
            <PlanetImg />
            <PlanetInfo planetName="Earth" />
            <DataCards planetName="Earth" />
        </>
    );
};
export default Planet;
