import { planets } from '../../data';
import { GoChevronRight } from 'react-icons/go';

const PlanetsList = () => {
    return (
        <div className="grid grid-cols-1 divide-y divide-dark-grey">
            {planets.map((planet, index) => {
                const { name } = planet;

                return (
                    <div key={index} className="flex h-16 mx-auto w-11/12">
                        <div className="flex-1 m-auto">
                            <div className="inline-flex">
                                <div
                                    className={`m-auto mr-4 w-4 h-4 rounded-full bg-${name.toLowerCase()}`}
                                ></div>
                                <p className="spartan-h3 text-white m-auto uppercase">
                                    {name}
                                </p>
                            </div>
                        </div>
                        <div className="flex-0 m-auto">
                            <GoChevronRight />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
export default PlanetsList;
