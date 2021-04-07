import { membersData } from '../data/teamMembers';
import MemberCard from '../components/MemberCard';
import {  useState,useEffect } from 'react';

const Members = () =>{
    const [members, setMembers]= useState ([]);
    const [alert, setAlert] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const foundMember = membersData.filter(md => {
            return(
                md.firstName.toLowerCase().includes(searchTerm.toLowerCase()) +
                md.lastName.toLowerCase().includes(searchTerm.toLowerCase())
                );
        });
        searchTerm === ''
        ? setMembers(membersData)
        : setMembers(foundMember);
    }, [searchTerm]);

    const updateFeatured = memberId => {
        let foundMember = membersData.find(member => member.id === +memberId);
        foundMember.featured = !foundMember.featured;
        
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, 2000);
    };

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    return(
        <div id='members'>
            <div className='row text-center mt-3'>
                <div className='col'>
                    <h2>View our Team!</h2>
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
            
                {members.map((member) => {
                    return (
                        <div className='col-sm-12 col-md-3' key={member.id}>
                            <MemberCard member={member} updateFeatured={updateFeatured}/>

                        </div>
                    )

                })}
            </div>

        </div>
    );
};

export default Members;