import { createContext, useState, useEffect } from 'react';
import { planets } from '../../data';

const PlanetsContext = createContext();

export const PlanetsProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [currentPlanet, setCurrentPlanet] = useState(planets[2]); // Earth
    const [planetsListOpen, setPlanetsListOpen] = useState(false);
    const [selectedBtn, setSelectedBtn] = useState('overview'); // Default view

    const togglePlanetsList = () => {
        setPlanetsListOpen((prevState) => !prevState);
    };

    const handlePlanetChange = (name) => {
        setIsLoading(true);
        planets.map((planet) => {
            if (planet.name === name) {
                setCurrentPlanet(planet);
                togglePlanetsList();
                setIsLoading(false);
            }
        });
    };

    const handleBtn = (e) => {
        setSelectedBtn(e.target.id);
    };

    return (
        <PlanetsContext.Provider
            value={{
                currentPlanet,
                handlePlanetChange,
                isLoading,
                setIsLoading,
                planetsListOpen,
                togglePlanetsList,
                selectedBtn,
                handleBtn,
            }}
        >
            {children}
        </PlanetsContext.Provider>
    );
};

export default PlanetsContext;
