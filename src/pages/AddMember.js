

const AddMember =({member, setMember,members,setMembers}) =>{
   

    const handleSubmit = event =>{
        event.preventDefault();
         addNewMember();
         clearForm();

    }
    const addNewMember = () => {
        member.id = Date.now();
        setMembers([...members, member]);
        console.log('members',members)
    }
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
        languages:'',
        })

      };
    return(
       
        <div className='row mb-5 mt-3'>
            
        <div className='col-6 offset-3'>
        <div className='row text-center'>
                <h1 className='w-100'>Create a New Account </h1>
                <p className='w-100 text-secondary' secondary> Be a member of the Alkali!</p>
                 </div>
          <form action='submit' id='member-form' onSubmit={handleSubmit}>
            <div className='row'>
            <div className='form-group col'>
              <label htmlFor='firstName'>First Name</label>
              <input
                type='text'
                id='firstName'
                className='form-control'
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
    );
};

export default AddMember;