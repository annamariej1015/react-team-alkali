import {Link} from 'react-router-dom';

const MembersCard = ({member, setMember}) => {
    const MemberUpdate = (memberList,index) => {
        setMember(memberList,index);

    }
    return (
        <div id='memberscard'>
       
        <Link to={`/members/${member.id}`}  className='card-link' onClick={ () => MemberUpdate(member)} >
            <div className="card border-0 bg-transparent card-wrapper">
            
                <div className=" image-box position-relative rounded-circle overflow-hidden mx-auto custom-circle-image">
                  <img class="w-100 h-100 " src={member.profile_img} alt={member.firstName}/>
          
                </div>
                <div className="card-body text-center mt-4">
                   <h4 className='card-title'>{member.firstName} {member.lastName}</h4>
                  
               </div>
              
            </div>
            </Link>
            
            </div>
       

       
    )
}
export default MembersCard;