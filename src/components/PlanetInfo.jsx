import { useEffect, useState } from 'react';
import { planets } from '../../data';
import source from '../../assets/icon-source.svg';

const PlanetInfo = ({ planetName }) => {
    const [currentPlanet, setCurrentPlanet] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPlanetInfo = () => {
            setLoading(true);
            planets.map((planet) => {
                if (planet.name === planetName) {
                    setCurrentPlanet(planet);
                    setLoading(false);
                }
            });
        };

        loadPlanetInfo();
    }, []);
    // console.log(currentPlanet);

    if (loading) {
        return <h1>Fucking loading</h1>;
    }

    const { name, overview, geology } = currentPlanet;

    return (
        <div className="flex flex-col">
            <div className="m-auto mb-10 antonio-h2 text-white uppercase">
                {name}
            </div>
            <p className="m-auto w-11/12 spartan-body text-center text-white">
                {overview.content}
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
