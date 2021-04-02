import { membersData } from '../data/teamMembers';
import { useState, useEffect } from 'react';

const HomePage =() =>{
    const [members, setMembers] =useState([]);

    useEffect(()=> {
        let profile = membersData.filter(member => member.profile);
        setMembers(profile);
    })

    return(
        <div id= 'homepage'>
            <div className="row text-center mt-3">
                <div className="col">
                    <h2>Team Alkali</h2>
                </div>
            </div>
            <div className="row">
                {members.map((member, index)=>{
                    return(
                        <div 
                            className="col-sm-12 col-md-3"
                            key={member.id}>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HomePage;
