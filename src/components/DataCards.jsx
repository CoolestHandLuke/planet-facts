import { useState, useEffect, useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const DataCards = () => {
    // TODO: Refactor to Context so we don't have to keep doing this state bullshit
    const {
        isLoading,
        currentPlanet: { radius, revolution, rotation, temperature },
    } = useContext(PlanetsContext);

    if (isLoading) {
        return <h1>Fucking loading</h1>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex m-auto mb-5 px-8 border-2 border-light-grey w-11/12 h-16">
                <div className="flex-1 text-start m-auto align-middle spartan-h3 uppercase">
                    Rotation Time
                </div>
                <div className="flex-1 text-end align-middle antonio-h2 text-white uppercase overflow-clip">
                    {rotation}
                </div>
            </div>
            <div className="flex m-auto mb-5 px-8 border-2 border-light-grey w-11/12 h-16">
                <div className="flex-1 text-start m-auto align-middle spartan-h3 uppercase overflow-clip">
                    Revolution Time
                </div>
                <div className="flex-1 text-end align-middle antonio-h2 text-white uppercase overflow-clip">
                    {revolution}
                </div>
            </div>
            <div className="flex m-auto mb-5 px-8 border-2 border-light-grey w-11/12 h-16">
                <div className="flex-1 text-start m-auto align-middle spartan-h3 uppercase">
                    Radius
                </div>
                <div className="flex-1 text-end align-middle antonio-h2 text-white uppercase overflow-clip">
                    {radius}
                </div>
            </div>
            <div className="flex m-auto mb-5 px-8 border-2 border-light-grey w-11/12 h-16">
                <div className="flex-1 text-start m-auto align-middle spartan-h3 uppercase">
                    Average Temp.
                </div>
                <div className="flex-1 text-end align-middle antonio-h2 text-white uppercase overflow-clip">
                    {temperature}
                </div>
            </div>
        </div>
    );
};
export default DataCards;
