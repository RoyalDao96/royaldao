import './App.css';
import BottomComponent from './components/BottomComponent';
import Cards from './components/Cards';
import TitleComponent from './components/TitleComponent';

function App() {
  return (
    <>
      <div className="App">
        <div className="square-background">
          <TitleComponent />
          <Cards />
          <BottomComponent />
        </div>
      </div>

      <div className="bottom-text-div" align="center">
        <h1>© 2024 RoyalDAO. All right reserved.</h1>
        <p>All assets shown on the website are actually managed by the RoyalDAO team and are not photoshopped or AI-generated images.</p>
      </div>
    </>
  );
}

export default App;
