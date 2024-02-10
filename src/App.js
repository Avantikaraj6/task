
import './App.css';
import Body from './Body.js/Body';
import Footer from './Footer';
import Navbar from './Navbar/Navbar';
import RecentlyViewed from './RecentlyViewed';
import SimilarProducts from './SimilarProducts';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Body />
    <SimilarProducts />
    <RecentlyViewed />
   <Footer />
    </div>
  );
}

export default App;
