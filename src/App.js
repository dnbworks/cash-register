import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AddPersonModal from './components/AddPersonModal';
import Home from './views/Home';
import Report from './views/Report';
import Settings from './views/Settings';
import Chart from './views/Chart';
import Statistic from './views/Statistic';
import Options from './views/Options';
import LoginPage from './views/LoginPage';
import AddPersonDetails from './components/AddPersonDetails';
import SelectedItemModal from './components/SelectedItemModal';
import { useGlobalContext } from './context/AppContext';

function App() {
  const { isOpenSelectedModal } = useGlobalContext();
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
        <Route path="/login" component={LoginPage} />
      </Switch>
      </div>
      <AddPersonModal/>
      <AddPersonDetails/>
      { isOpenSelectedModal && <SelectedItemModal/> }
    </div>
  );
}

export default App;
