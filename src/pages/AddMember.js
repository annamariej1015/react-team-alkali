const AddMember =() =>{
    const handleSubmit =() =>{

    }
    return(
       
        <div className='row mb-5 mt-3'>
            
        <div className='col-6 offset-3'>
        <div className='row text-center'>
                <h1 className='w-100'>Sign up </h1>
                <p className='w-100 text-secondary' secondary> New member</p>
                 </div>
          <form action='submit' id='member-form' onSubmit={handleSubmit}>
            <div className='row'>
            <div className='form-group col'>
              <label htmlFor='firstName'>First Name</label>
              <input
                type='text'
                id='firstName'
                className='form-control'
                value=''
                // onChange={event => {
                //   setHeroName(event.target.value);
                // }}
              />
            </div>
            <div className='form-group col'>
              <label htmlFor='lastName'>Last Name</label>
              <input
                type='text'
                className='form-control'
                id='lastName'
                value=''
                // onChange={event => {
                //   setHeroPower(event.target.value);
                // }}
              />
            </div>
            </div>
            
              <div className='form-group'>
                <label htmlFor='profileImage'>Profile Image</label>
                <input
                  type='text'
                  id='profileImage'
                  className='form-control'
                  value=''
                //   onChange={event => {
                //     setHeroUniverse(event.target.value);
                //   }}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  type='number'
                  className='form-control'
                  id='email'
                  value=''
                //   onChange={event => {
                //     setHeroCoolnessRating(event.target.value);
                //   }}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='linkedIn'>LinkedIn</label>
                <input
                  type='number'
                  className='form-control'
                  id='linkedIn'
                  value=''
                //   onChange={event => {
                //     setHeroCoolnessRating(event.target.value);
                //   }}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='github'>Github</label>
                <input
                  type='number'
                  className='form-control'
                  id='github'
                  value=''
                //   onChange={event => {
                //     setHeroCoolnessRating(event.target.value);
                //   }}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='languages'>languages</label>
                <input
                  type='number'
                  className='form-control'
                  id='languages'
                  value=''
                //   onChange={event => {
                //     setHeroCoolnessRating(event.target.value);
                //   }}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='biography'>Biography</label>
                <textarea class="form-control" id="biography" rows="3"></textarea>
              </div>
           
            <button className='btn btn-primary btn-block'>Save</button>
          </form>
        </div>
      </div>
    );
};

export default AddMember;