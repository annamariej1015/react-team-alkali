import { membersData } from '../data/teamMembers';
import MemberCard from '../components/MemberCard';
import { useState, useEffect } from 'react';

const HomePage =() =>{
    const [members, setMembers] =useState([]);
    const [alert, setAlert] = useState(false);

    useEffect(()=> {
        let profile = membersData.filter(member => member.featured);
        setMembers(profile);
        //console.log(membersData);
    },[alert]);

    const addMember = memberId => {
        let addedMember = membersData.find(member =>member.id === +memberId);
        addedMember.profile = !addedMember.profile;
        showAlert();
    };

    const showAlert = () =>{
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, 2000);
    };

    return(
        <div id= 'homepage'>
            <div className="row text-center mt-3">
                <div className="col">
                    <h2>Team Alkali</h2>
                 </div>
                 </div>   
                    <div className="row mt-3">
                        <div className='col'>
                        <div className='col text-center'>
                    <h5>
                        About Us
                    </h5>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                
           
      
                <div className='col '>
                
                        {members.map((member, index)=>{
                        return (
                            <div className='col-sm-12'>
                                <MemberCard member={member}/>
        
                            </div>
                        )
                    })}
                    </div>
                
                
            </div>
        </div>
    );
};

export default HomePage;
