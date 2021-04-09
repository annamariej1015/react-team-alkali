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
        languages:[],
    })
    
    return(
        <div id= 'approuter'>
            <NavBar/>
            <div className="container">
                <Switch>
                  <Route path='/' exact component={HomePage}/>
                  <Route exact path='/members'  render={(props) => <Members {...props} members={members} setMembers={setMembers}/>}
                   />
                  <Route path='/members/add' render={(props) => <AddMember {...props} members={members} setMembers={setMembers} />}
                   />
                  <Route path='/members/:memberId' render={(props) => <Member {...props} member={member} setMember={setMember} members={members} setMembers={setMembers}/>}/>
           
                </Switch>
            </div>
        </div>
    );
};
export default AppRouter;