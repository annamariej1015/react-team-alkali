import MemberCard from '../components/MemberCard';
import {  useState,useEffect } from 'react';

const Members = ({members, setMembers}) =>{
    const[searchMembers, setSearchMember] = useState([])
    
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        console.log('search:',searchMembers);
        const foundMember = members.filter(md => {
            return(
                md.firstName.toLowerCase().includes(searchTerm.toLowerCase()) +
                md.lastName.toLowerCase().includes(searchTerm.toLowerCase())
                );
        });
        
        searchTerm === ''
        ? setSearchMember(members)
        : setSearchMember(foundMember);
    }, [searchTerm]);

  
   

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    return(
        <div id='members'>
            <div className='row text-center mt-3'>
                <div className='col'>
                    <h2>Meet our Team!</h2>
                </div>
            </div>
            
            <div className='row'>
                    <div className='col'>
                        <div className='form-group'>
                            <input
                                type='text'
                                className='form-control'
                                id='member-search'
                                placeholder='Search for a Member'
                                value={searchTerm}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

            <div className='row'>
            
                {searchMembers.map((member) => {
                    return (
                        <div className='col-sm-12 col-md-3' key={member.id}>
                            <MemberCard member={member} />

                        </div>
                    )

                })}
            </div>

        </div>
    );
};

export default Members;