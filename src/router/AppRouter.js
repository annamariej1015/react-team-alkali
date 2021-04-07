import {Route, Switch} from 'react-router-dom';
import {membersData }from '../data/teamMembers';
import {  useState } from 'react';
import NavBar from '../components/Navbar';
import HomePage from '../pages/Home';
import Member from '../pages/Member';
import Members from '../pages/Members';
import AddMember from '../pages/AddMember';

const AppRouter = () => {
    const[members, setMembers]= useState(membersData)
    
    const[member, setMember] = useState({
        id: '',
        firstName: '',
        lastName: '',
        profile_img: '',
        role: '',
        bio: '',
        email:'',
        github: '',
        linkedIn:'',
        languages:'',
    })
    return(
        <div>
            <NavBar/>
            <div className="container">
                <Switch>
                <Route path='/' exact component={HomePage}/>
                <Route exact path='/members'  render={(props) => <Members {...props} members={members} setMembers={setMembers}/>}
                />
                <Route path='/members/add' render={(props) => <AddMember {...props} members={members} setMembers={setMembers} member={member} setMember={setMember}/>}
                />
                <Route path='/members/:memberId' component={Member}/>
           
                </Switch>
            </div>
        </div>
    );
};
export default AppRouter;