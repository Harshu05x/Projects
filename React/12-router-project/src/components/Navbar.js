import { toast } from 'react-hot-toast';
import logo2 from '../assets/logo2.png'
import { Link } from 'react-router-dom';
// import { Toast } from 'react-toastify/dist/components';

function Navbar(props){

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    return(
        <div className='flex justify-between items-center w-11/12 max-w-[1060px] py-4 mx-auto'>

            <Link to='/'>
                <img src={logo2} alt='logo' width={160} height={32} loading='lazy' ></img> 
            </Link>

            <nav>
                <ul className='flex gap-x-6 text-white'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='#'>About</Link>
                    </li>
                    <li>
                        <Link to='#'>Contact</Link>
                    </li>
                </ul>
            </nav>

            {/* Login - SignUp - LogOut - Dashboard  */}
            <div className='flex items-center gap-x-4'>
                
                {   !isLoggedIn && 
                    <Link to='/login'>
                        <button className=' text-white bg-[#292f34] py-[8px] px-[12px] rounded-[8px] border border-[#696e71]'>
                            Log In
                        </button>
                    </Link>
                }
                {   !isLoggedIn &&
                    <Link to='/signup'>
                        <button className=' text-white bg-[#292f34] py-[8px] px-[12px] rounded-[8px] border border-[#696e71]'>
                            Sign Up
                        </button>
                    </Link>
                }
                {   isLoggedIn &&
                    <Link to='/'>
                        <button 
                            onClick={ () => {
                                setIsLoggedIn(false);
                                toast.success("Logged Out");
                            }}
                            className=' text-white bg-[#292f34] py-[8px] px-[12px] rounded-[8px] border border-[#696e71]'>
                                Log Out
                        </button>
                    </Link>
                }
                {   isLoggedIn &&
                    <Link to='/dashboard'>
                        <button className=' text-white bg-[#292f34] py-[8px] px-[12px] rounded-[8px] border border-[#696e71]'>
                            Dashboard
                        </button>
                    </Link>
                }

            </div>
        </div>
    )
}

export default Navbar;