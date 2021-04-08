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
    const [success, setSuccess] = useState(false);
    const addNewMember = () => {
        member.id = Date.now();
        setMembers([...members, member]);
        console.log('members',members)
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 2000);
        clearForm();
      };
        
    
    
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
    const clearForm = () => {
        setMember({
        id: '',
        firstName: '',
        lastName: '',
        profile_img: '',
        role:'',
        bio: '',
        email:'',
        github: '',
        linkedIn:'',
        languages:[],
        })
    }
    return(
        <div>
            <NavBar/>
            <div className="container">
                   {success ? (
                <div className='row'>
                   <div className='col-6 offset-3'>
                      <div class='alert alert-success text-center' role='alert'>
                          You've successfully added a hero!
                      </div>
                 </div>
             </div>
      ) : (
        ''
      )}
                <Switch>
                <Route path='/' exact component={HomePage}/>
                <Route exact path='/members'  render={(props) => <Members {...props} members={members} setMembers={setMembers}/>}
                />
                <Route path='/members/add' render={(props) => <AddMember {...props} addNewMember={addNewMember} member={member} setMember={setMember}/>}
                />
                <Route path='/members/:memberId' render={(props) => <Member {...props} member={member} setMember={setMember} members={members} setMembers={setMembers}/>}/>
           
                </Switch>
            </div>
        </div>
    );
};
export default AppRouter;