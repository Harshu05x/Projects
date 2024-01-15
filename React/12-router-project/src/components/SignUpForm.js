import {useState} from 'react'
import {AiOutlineEyeInvisible,AiOutlineEye} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
function SignUpForm({setIsLoggedIn}){

    const [showPassword,setShowPassword] = useState(false);
    const [showConfrimPassword,setShowConfrimPassword] = useState(false);
    const [accountType,setAccoutType] = useState("student");

    const navigate = useNavigate();

    const [formData,setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    function changeHandler(event){
        setFormData((prev) => {
            return{
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    function submitHandler(event){
        event.preventDefault();

        if(formData.password !== formData.confirmPassword){
            toast.error("Password do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData,
            accountType
        }
        console.log("Printing Account data--> " , accountData);
        navigate("/dashboard");
    }

    return(
        <div>
            
            <div className='flex bg-[#28292a7e] p-1 gap-x-2 rounded-full max-w-max mt-6 mb-4'>
                <button
                className={`${accountType === 'student' ? "bg-[#010B13] text-white" : " bg-transparent text-[rgba(249,249,249,0.3)]"} " px-5 py-2 rounded-full transition-all duration-200"`}
                onClick={() => setAccoutType("student")}>
                    Student
                </button>
                <button
                className={`${accountType === 'instructor' ? "bg-[#010B13] text-white" : " bg-transparent text-[rgba(249,249,249,0.3)]"} " px-5 py-2 rounded-full transition-all duration-200"`}
                onClick={() => setAccoutType("instructor")}
                >
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler} className='flex flex-col gap-y-3 p-1'>
                {/* First Name & Last Name */}
                <div className=' flex gap-x-3' >
                    <lable className="w-full">
                        <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-600'>*</sup></p>
                        <input required 
                        type="text"
                        value={formData.firstName}
                        name="firstName"
                        placeholder='Enter First name'
                        onChange={changeHandler}
                        className=' bg-[#28292a7e] text-white rounded-[0.5rem] w-full p-[8px] border-b border-b-[#696e717e] placeholder:text-[rgba(249,249,249,0.3)]'>
                        </input>
                    </lable>
                    <lable className='w-full'>
                        <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-600'>*</sup></p>
                        <input required 
                        type="text"
                        value={formData.lastName}
                        name="lastName"
                        placeholder='Enter Last name'
                        onChange={changeHandler}
                        className=' bg-[#28292a7e] text-white rounded-[0.5rem] w-full p-[8px] border-b border-b-[#696e717e] placeholder:text-[rgba(249,249,249,0.3)]'>
                        </input>
                    </lable>
                </div>

                {/* Email Address */}
                <lable>
                    <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]' >Email Address<sup className='text-pink-600'>*</sup></p>
                    <input required 
                    type="email"
                    value={formData.email}
                    name="email"
                    placeholder='Enter Email ID'
                    onChange={changeHandler}
                    className=' bg-[#28292a7e] text-white rounded-[0.5rem] w-full p-[8px] border-b border-b-[#696e717e] placeholder:text-[rgba(249,249,249,0.3)]'>
                    </input>
                </lable>

                {/* Create Password & Confirm Password */}
                <div className=' flex gap-x-3' >
                    <lable className=' relative w-full'>
                        <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-600'>*</sup></p>
                        <input type={showPassword ? ("text") : ("password")}
                        value={formData.password}
                        name="password"
                        placeholder='Enter Password'
                        onChange={changeHandler}
                        className=' bg-[#28292a7e] text-white rounded-[0.5rem] w-full p-[8px] border-b border-b-[#696e717e] placeholder:text-[rgba(249,249,249,0.3)]'>
                        </input>
                    
                        <span className=' text-[#AFB2BF] font-24 text-xl absolute top-[40px] right-3 cursor-pointer' 
                        onClick={() => {
                            setShowPassword( (prev) => !prev)
                        }}>
                            {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />) }
                        </span>
                    </lable>
                    <lable className='relative w-full'>
                        <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-600'>*</sup></p>
                        <input type={showConfrimPassword ? ("text") : ("password")}
                        value={formData.confirmPassword}
                        name="confirmPassword"
                        placeholder='Confirm Password'
                        onChange={changeHandler}
                        className=' bg-[#28292a7e] text-white rounded-[0.5rem] w-full p-[8px] border-b border-b-[#696e717e] placeholder:text-[rgba(249,249,249,0.3)]'>
                        </input>
                    
                        <span className=' text-[#AFB2BF] font-24 text-xl absolute top-[40px] right-3 cursor-pointer' 
                        onClick={() => {
                            setShowConfrimPassword( (prev) => !prev)
                        }}>
                            {showConfrimPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />) }
                        </span>
                    </lable>
                </div>

                <button className=' text-black text-center bg-yellow-400 rounded-[8px] font-medium py-[10px] px-[8px] mt-6'> 
                    Create Account
                </button>


            </form>
        </div>
    )
}

export default SignUpForm;