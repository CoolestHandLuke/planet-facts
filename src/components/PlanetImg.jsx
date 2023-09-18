import planetMercury from '../../assets/planet-mercury.svg';

const PlanetImg = () => {
    return (
        <div className="h-fit flex">
            <img
                className="mx-auto mt-56 mb-10 h-[111px] w-[111px]"
                src={planetMercury}
                alt="a planet"
            />
        </div>
    );
};
export default PlanetImg;
