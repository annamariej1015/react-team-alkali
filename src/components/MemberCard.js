import {Link} from 'react-router-dom';


const MemberCard =({member}) =>{

    return(
        <div id="membercard">
            <Link to={`/members/${member.id}`}  className='card-link'>
            <div className="card border-0 bg-transparent card-flyer">
              <div className=" image-box  ">
                  <img src={member.profile_img} alt={member.firstName}/>
               </div>
               <div className="card-body text-center mt-4">
                     <h4 className='card-title'>{member.firstName} {member.lastName}</h4>
                     <h6 className='card-text'>{member.role}</h6>
                                
                            
                                    <div className='my-2'>
                                        
                                        {member.languages.map((language,i) => {
                                            return(
                                                <small>{language} {i === member.languages.length -1 ? '':', '} </small>
                                            )
                                        })}
                                    </div>
                                   
                                
                                  
                            </div>

               </div>
            
            </Link>
            </div>
           )

     
};

export default MemberCard;