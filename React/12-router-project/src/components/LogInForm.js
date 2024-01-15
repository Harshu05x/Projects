import {useState} from 'react'
import {AiOutlineEyeInvisible,AiOutlineEye} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
function LogInForm({setIsLoggedIn}){
    const [formData,setFormData] = useState({email:"", password:""})

    const [showPassword,setShowPassword] = useState(false);

    const navigate = useNavigate();

    function changeHandler(event){
        setFormData((prev) => {
            return{
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    function SubmitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }

    return(
        <form onSubmit={SubmitHandler}
        className=' flex flex-col w-full gap-y-4 mt-6 p-2'>
            
            <lable className="w-full">
                <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-600'>*</sup></p>
                <input required 
                type="email"
                value={formData.email}
                name="email"
                placeholder='Enter Email ID'
                onChange={changeHandler}
                className=' bg-[#28292a7e] text-white rounded-[0.5rem] w-full p-[12px] border-b border-b-[#696e717e] placeholder:text-[rgba(249,249,249,0.3)]
                '>
                </input>
            </lable>

            <lable className=" w-full relative">
                <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Password<sup className=' text-pink-600'>*</sup></p>
                <input required 
                type={showPassword ? ("text") : ("password")}
                value={formData.password}
                name="password"
                placeholder='Enter Password'
                onChange={changeHandler}
                className=' bg-[#28292a7e] text-white rounded-[0.5rem] w-full p-[12px] border-b border-b-[#696e717e] placeholder:text-[rgba(249,249,249,0.3)]
                '>
                </input>
            
                <span onClick={() => {
                    setShowPassword( (prev) => !prev)
                }}
                className=' text-[#AFB2BF] font-24 text-xl absolute top-[40px] right-3 cursor-pointer'>
                    {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />) }
                </span>

                <Link to="#">
                    <p className='text-xs mt-1 text-blue-300 ml-auto max-w-max'>Forgot Password</p>
                </Link>
            </lable>

            <button className=' text-black text-center bg-yellow-400 rounded-[8px] font-medium py-[10px] px-[8px] mt-6'>
                Sign In
            </button>


        </form>
    )
}

export default LogInForm;