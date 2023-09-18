import { useState, useEffect } from 'react';
import { planets } from '../../data';

const DataCards = ({ planetName }) => {
    // TODO: Refactor to Context so we don't have to keep doing this state bullshit

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
    console.log(currentPlanet);

    if (loading) {
        return <h1>Fucking loading</h1>;
    }

    const { radius, revolution, rotation, temperature } = currentPlanet;
    return (
        <>
            <div className="flex m-auto mb-5 px-8 border-2 border-light-grey w-11/12 h-16">
                <div className="flex-1 text-start m-auto align-middle spartan-h3 uppercase">
                    Rotation Time
                </div>
                <div className="flex-1 text-end align-middle antonio-h2 text-white uppercase">
                    {rotation}
                </div>
            </div>
            <div className="flex m-auto mb-5 px-8 border-2 border-light-grey w-11/12 h-16">
                <div className="flex-1 text-start m-auto align-middle spartan-h3 uppercase">
                    Revolution Time
                </div>
                <div className="flex-1 text-end align-middle antonio-h2 text-white uppercase">
                    {revolution}
                </div>
            </div>
            <div className="flex m-auto mb-5 px-8 border-2 border-light-grey w-11/12 h-16">
                <div className="flex-1 text-start m-auto align-middle spartan-h3 uppercase">
                    Radius
                </div>
                <div className="flex-1 text-end align-middle antonio-h2 text-white uppercase">
                    {radius}
                </div>
            </div>
            <div className="flex m-auto mb-5 px-8 border-2 border-light-grey w-11/12 h-16">
                <div className="flex-1 text-start m-auto align-middle spartan-h3 uppercase">
                    Average Temp.
                </div>
                <div className="flex-1 text-end align-middle antonio-h2 text-white uppercase">
                    {temperature}
                </div>
            </div>
        </>
    );
};
export default DataCards;
