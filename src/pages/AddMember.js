import {  useState } from 'react';
const AddMember =({members, setMembers}) =>{
  const [success, setSuccess] = useState(false);
  const[member, setMember] = useState({
    id: '',
    firstName: '',
    lastName: '',
    profile_img: '',
    role: '',
    bio: '',
    email:'',
    github: '',
    linkedIn:'',
    languages:[],
})
const clearForm = () => {
  setMember({
  id: '',
  firstName: '',
  lastName: '',
  profile_img: '',
  role:'',
  bio: '',
  email:'',
  github: '',
  linkedIn:'',
  languages:[],
  })
}

  const addNewMember = () => {
    member.id = Date.now();
    setMembers([...members, member]);
    console.log('members',members)
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
    clearForm();
  };
    
  const handleSubmit = event => {
        event.preventDefault();
         addNewMember();
    }
    
   return(
       
        <div id='addMember'>
           {success ? (
                <div className='row'>
                   <div className='col-6 offset-3'>
                      <div class='alert alert-success text-center' role='alert'>
                          You've successfully added a New Alakli!
                      </div>
                 </div>
             </div>
      ) : (
        ''
        )}
        <div className='row mb-5 mt-3'>
        <div className='col-6 offset-3'>
          <div className='register-box'>
        <div className='row text-center'>
                <h1 className='w-100'>Create a New Account </h1>
                <h6 className='w-100 ' > Be a member of the Alkali</h6>
                 </div>
          <form action='submit' id='member-form ' className='mt-5' onSubmit={handleSubmit}>
            <div className='row'>
            <div className='form-group col'>
              <label htmlFor='firstName'>First Name</label>
              <input
                type='text'
                id='firstName'
                className='form-control'
                placeholder='First Name'
                value={member.firstName}
                onChange={event => {
                  setMember({...member, firstName:event.target.value});
                }}
              />
            </div>
            <div className='form-group col'>
              <label htmlFor='lastName'>Last Name</label>
              <input
                type='text'
                className='form-control'
                placeholder='Last Name'
                id='lastName'
                value={member.lastName}
                onChange={event => {
                  setMember({...member,lastName:event.target.value});
                }}
              />
            </div>
            </div>
            
              <div className='form-group'>
                <label htmlFor='profileImage'>Profile Image</label>
                <input
                  type='text'
                  id='profileImage'
                  className='form-control'
                  placeholder='Image url'
                  value={member.profile_img}
                  onChange={event => {
                    setMember({...member, profile_img:event.target.value});
                  }}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='role'>Role</label>
                <input
                  type='text'
                  id='role'
                  className='form-control'
                  placeholder='Role'
                  value={member.role}
                  onChange={event => {
                    setMember({...member, role:event.target.value});
                  }}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Email'
                  id='email'
                  value={member.email}
                  onChange={event => {
                    setMember({...member, email:event.target.value});
                  }}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='linkedIn'>LinkedIn</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='LinkedIn link'
                  id='linkedIn'
                  value={member.linkedIn}
                  onChange={event => {
                    setMember({...member, linkedIn:event.target.value});
                  }}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='github'>Github</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Github link'
                  id='github'
                  value={member.github}
                  onChange={event => {
                    setMember({...member, github:event.target.value});
                  }}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='languages'>languages</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='html,css,javascript...'
                  id='languages'
                  value={member.languages}
                  onChange={event => {
                    setMember({...member, languages:event.target.value.split(',')});
                  }}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='biography'>Biography</label>

                <textarea type='text'
                className="form-control" 
                placeholder='Tell us about your self...'
                id="biography"
                value={member.bio} 
                rows="3"
                onChange={event => {
                    setMember({...member,bio:event.target.value});
                }}>

                </textarea>
              </div>
           
            <button className='btn btn-primary btn-block'>Save</button>
          </form>
          </div>
        </div>
      </div>
      </div>  
    );
};

export default AddMember;