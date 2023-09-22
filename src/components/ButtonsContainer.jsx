import { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const ButtonsContainer = () => {
    const { currentPlanet, handleBtn, selectedBtn } =
        useContext(PlanetsContext);
    const name = currentPlanet.name.toLowerCase();
    return (
        <div className="flex-auto">
            <div className="grid grid-cols-3 grid-rows-1 gap-4 border-b-2 border-dark-grey">
                <div className="m-auto">
                    <button
                        id="overview"
                        onClick={(e) => handleBtn(e)}
                        className={
                            selectedBtn === 'overview'
                                ? `btn btn-ghost spartan-h3 rounded-none uppercase  bg-background-black text-white border-0 border-b-4 border-${name}`
                                : 'btn btn-ghost spartan-h3 rounded-none uppercase  bg-background-black'
                        }
                    >
                        Overview
                    </button>
                </div>

                <div className="m-auto">
                    <button
                        id="geology" // structure
                        onClick={(e) => handleBtn(e)}
                        className={
                            selectedBtn === 'geology'
                                ? `btn btn-ghost spartan-h3 rounded-none uppercase  bg-background-black text-white border-0 border-b-4 border-${name}`
                                : 'btn btn-ghost spartan-h3 rounded-none uppercase  bg-background-black'
                        }
                    >
                        Structure
                    </button>
                </div>

                <div className="m-auto">
                    <button
                        id="surface"
                        onClick={(e) => handleBtn(e)}
                        className={
                            selectedBtn === 'surface'
                                ? `btn btn-ghost spartan-h3 rounded-none uppercase  bg-background-black text-white border-0 border-b-4 border-${name}`
                                : 'btn btn-ghost spartan-h3 rounded-none uppercase  bg-background-black'
                        }
                    >
                        Surface
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ButtonsContainer;
