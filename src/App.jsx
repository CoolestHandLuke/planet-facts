import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Planet from './components/Planet';

function App() {
    // Navbar stickied to the top. Changes based on media queries
    // Planets list, contains links to each planet page
    // Buttons Container that changes position based on screen size. Stuck underneath the Navbar on mobile screens,
    // bottom right on tablets, under the planet info section on desktop
    // Planet picture holder. Does what it says. Moves around based on screen size
    // Planet name and info holder. Again, does what it says, and moves around based on screen size.
    // Data cards container. Always 4 cards, all have the same data.
    // Also need to make a mobile menu containing menu-planet components

    return (
        <div className=" bg-background-black bg-stars-background h-full">
            <Navbar />
            <Planet />
        </div>
    );
}

export default App;
