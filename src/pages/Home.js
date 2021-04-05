import { membersData } from '../data/teamMembers';
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
                    <h5>
                        About Us
                    </h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit officia laudantium ad? Ratione modi quasi voluptates porro. Quod ex quaerat quis tempore facilis autem nesciunt odit, placeat, expedita consequuntur sapiente?</p>
                </div>
            </div>
            <div className="row">
                <ul>
                        {members.map((member, index)=>{
                        return(
                            <li
                                className="col-sm-12 col-md-3"
                                key={member.id}>
                                    {member.firstName}
                            </li>   
                        );
                    })}
                </ul>
                
            </div>
        </div>
    );
};

export default HomePage;
