import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './views/Home';
import Report from './views/Report';
import Settings from './views/Settings';
import Chart from './views/Chart';
import Statistic from './views/Statistic';
import Options from './views/Options';

function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <div className="sub__wrapper">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/report" component={Report} />
        <Route path="/settings" component={Settings} />
        <Route path="/charts" component={Chart} />
        <Route path="/statistic" component={Statistic} />
        <Route path="/options" component={Options} />
      </Switch>
      </div>
    </div>
  );
}

export default App;
