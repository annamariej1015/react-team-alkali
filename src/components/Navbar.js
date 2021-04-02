import { Link} from 'react-router-dom';
const Navbar = () => {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <Link className='navbar-brand' to='/'>
          Team Alkali
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav ml-auto'>
            <Link className='nav-link active' to='/'>
              Homepage
            </Link>
            <Link className='nav-link' to='/members'>
               Members
            </Link>
            <Link className='nav-link' to='/members/:memberId'>
               Member
            </Link>
            <Link className='nav-link' to='/members/add'>
               New Member
            </Link>
            
          </div>
        </div>
      </nav>
    );
  };
  export default Navbar;