import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MembersCard from '../components/MembersCard';
import DetailCard from '../components/DetailCard';



const Member =({member,setMember,members}) => {
    const [alert, setAlert] = useState(false);
    let { memberId } = useParams();
  
    useEffect(() => {
        console.log('members',members)
        let foundMember = members.find(m =>m.id === +memberId);
        setMember(foundMember);
    }, [member]);

    const updateFeatured = profileId => {
        // first find the hero from heroData by heroId
        let foundMember = members.find(m => m.id === +profileId);
        // updated foundHero.featured to be opposite of its current value
        foundMember.featured = !foundMember.featured;
        // setHero(foundHero);
        setMember(foundMember)
        
        // hero.featured = !hero.featured;
      };

  return(
        <div id='member'>

            <DetailCard member={member} setMember={setMember} members={members}/>
           
            <div className='row'>
            
            {members.map((member) => {
                return (
                    <div className='col-sm-12 col-md-3' key={member.id}>
                        <MembersCard member={member} setMember={setMember}/>

                    </div>
                )

            })}
        </div>

        </div>
  )
};

export default Member;