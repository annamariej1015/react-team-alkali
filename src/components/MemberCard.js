import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const MemberCard =({member}) =>{

    return(
    
                
                    <div className='card mb-3'>
                        <div className='card-header text-center'>
                            {member.role}
                            </div>
                        
                            <div className='th-card-bg-img' style={{backgroundImage:`url(${member.profile_img})`}}>

                            </div>
                        
                            <div className='card-body'>
                                <h4 className='card-title'>{member.firstName} {member.lastName}</h4>
                                {/* <p className='card-text'>{member.bio}</p> */}
                            
                                    <div className='my-2'>
                                        <strong>Languages:</strong>
                                        {member.languages.map((language,i) => {
                                            return(
                                                <small>{language} {i === member.languages.length -1 ? '':', '} </small>
                                            )
                                        })}
                                    </div>
                                    <div className='card-body'>
                                        <a href={member.email} className='card-link'>
                                        <FontAwesomeIcon icon={faEnvelope} size="2x"/>
                                        </a>
                                         <a
                                           href={member.linkedIn}
                                           className='card-link'
                                           target='_blank'
                                           rel='noreferrer noopener'>
                                            <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                                          </a>
                                          <a
                                           href={member.github}
                                           className='card-link'
                                           target='_blank'
                                           rel='noreferrer noopener'>
                                            <FontAwesomeIcon icon={faGithub} size="2x"/>
                                        </a>
                                </div>
                                <div className='my-2 d-flex justify-content-between'>
                                       <Link to={`/members/${member.id}`} className='card-link'>View Details</Link>
                                </div>
                                  
                            </div>

                    </div>  

                )

     
};

export default MemberCard;