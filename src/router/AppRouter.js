import {Route, Switch} from 'react-router-dom';
import NavBar from '../components/Navbar';
import HomePage from '../pages/Home';
import Member from '../pages/Member';
import Members from '../pages/Members';
import AddMember from '../pages/AddMember';

const AppRouter = () => {
    return(
        <div>
            <NavBar/>
            <div className="container">
                <Switch>
                <Route path='/' exact component={HomePage}/>
                <Route path='/members' exact component={Members}/>
                <Route path='/members/add' component={AddMember}/>
                <Route path='/members/:memberId' component={Member}/>
           
                </Switch>
            </div>
        </div>
    );
};
export default AppRouter;