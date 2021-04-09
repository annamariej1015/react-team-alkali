import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const FeatureCard =({member}) =>{
 
    return(
        <div id='featureCard'>
             <Link to={`/members/${member.id}`}  className='card-link'>
             <div className='card border-0 bg-transparent card-flyer'>
                        <div className='card-header  role text-center'>
                            {member.role}
                            </div>
                        <div className=" image-box  ">
                                <img src={member.profile_img} alt={member.firstName}/>
                        </div>
                            <div className='card-body text-center mt-4"'>
                                <h4 className='card-title'>{member.firstName} {member.lastName}</h4>
                               
                              
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

export default FeatureCard;