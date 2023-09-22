import { useContext, useEffect } from 'react';
import source from '../../assets/icon-source.svg';
import PlanetsContext from '../context/PlanetsContext';

const PlanetInfo = () => {
    const { currentPlanet, isLoading, setIsLoading, selectedBtn } =
        useContext(PlanetsContext);

    // console.log(currentPlanet);
    useEffect(() => {
        setIsLoading(true);
        console.log(selectedBtn);
        setIsLoading(false);
    }, [selectedBtn]);

    if (isLoading) {
        return <h1>Fucking loading</h1>;
    }

    const { name, overview, structure, geology } = currentPlanet;
    console.log(currentPlanet);

    return (
        <div className="flex flex-col">
            <div className="m-auto mb-10 antonio-h2 text-white uppercase">
                {name}
            </div>
            <p className="m-auto w-11/12 spartan-body text-center text-white">
                {selectedBtn === 'overview'
                    ? overview.content
                    : selectedBtn === 'geology'
                    ? structure.content
                    : geology.content}
            </p>
            <div className="flex flex-row justify-center ">
                <div className="spartan-body text-center align-middle">
                    Source:{' '}
                    <a
                        className="underline spartan-h4 align-middle"
                        href={overview.source}
                    >
                        Wikipedia
                    </a>
                </div>
                <div className="flex ml-1">
                    <img className="w-3 h-3 m-auto" src={source}></img>
                </div>
            </div>
        </div>
    );
};
export default PlanetInfo;
