import "./App.css";
import Title from "./Components/Title";
import Particle from "./Components/Particle";
import Icons from "./Components/Icons";
import Picture from "./Components/Picture";
function App() {
  return (
    <>
      <div className="h-screen bg-black">
        <Particle />
        <div className="h-full w-full flex items-center justify-center text-center">
          <div style={{ zIndex: 1 }}>
            <Picture />
            <Title />
            <Icons />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
