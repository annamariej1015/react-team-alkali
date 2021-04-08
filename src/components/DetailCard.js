import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const DetailCard = ({member,setMember,members}) => {
    let { memberId } = useParams();
  
    useEffect(() => {
        console.log('members',members)
        let foundMember = members.find(m =>m.id === +memberId);
        setMember(foundMember);
    }, [member]);
    return (
        <div className='row'>
        <div class="card mb-3 mt-3">
        <div className='row no-gutters'>
            <div className='col-md-4'>
                <div className='th-card-bg-img-member' style={{backgroundImage:`url(${member.profile_img})`}}>
                </div>
            </div>
            <div className='col-md-8'>
                <div className='card-header text-center'>
                       <h3>{member.role}</h3> 
                </div>
                <div className='card-body'>
                  <h4 className='card-title'>{member.firstName} {member.lastName}</h4>
                  <p className='card-text'>Bio: {member.bio}</p>
                  <div className='my-2'>
                        <strong>Languages:</strong>
                            <p className='ml-5'>
                                {member.languages.map((language,i) => {
                                    return(
                                        <span
                                            className='badge badge-pill badge-success mx-1'
                                            key={i}>
                                                {language} {i === member.languages.length -1 ? '':', '} 
                                         </span>
                                        );
                                        })}
                            </p>
                  </div>
                  <div className='text-center'>
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
                                
                </div>

            </div>
        </div>
        </div>
        </div>
    )
}
export default DetailCard;