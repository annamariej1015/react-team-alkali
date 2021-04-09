import { membersData } from '../data/teamMembers';
import FeatureCard from '../components/FeatureCard';
import { useState, useEffect } from 'react';

const HomePage =() =>{
    const [members, setMembers] =useState([]);
    

    useEffect(()=> {
        let profile = membersData.filter(member => member.featured);
        
        setMembers(profile);
      
    },[]);
return(
        <div id= 'homepage'>
            <div className="row text-center mt-5">
                <div className="col mt-5">
                    <h2>Welcome To Alkali</h2>
                 </div>
                 </div>   
                    <div className="row ">
                        <div className='col '>
                        <div className='about text-center mt-5'>
                    <h5>
                        About Us
                    </h5>
                    </div>
                    <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                
           
      
                <div className='col '>
                
                        {members.map((member, index)=>{
                        return (
                            <div className='col-sm-12'>
                                <FeatureCard member={member}/>
        
                            </div>
                        )
                    })}
                    </div>
                
                
            </div>
        </div>
    );
};

export default HomePage;
