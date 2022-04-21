import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './views/Home';

function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <div className="sub__wrapper">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      </div>
    </div>
  );
}

export default App;
