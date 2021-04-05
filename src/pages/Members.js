import { membersData } from '../data/teamMembers';
import MemberCard from '../components/MemberCard';
const Members =() =>{
    return(
        <div id='members'>
            <div className='row text-center mt-3'>
               <div className='col'>
                  <h2>View our Team!</h2>
               </div>
            </div>
            
            <div className='row'>
            
            {membersData.map((member) => {
                return (
                    <div className='col-sm-12 col-md-3'>
                        <MemberCard member={member}/>

                    </div>
                )

            })}
        </div>
            
                  
                

           
           
            

        </div>
    );
};

export default Members;