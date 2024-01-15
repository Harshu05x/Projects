import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";
import {FcGoogle} from 'react-icons/fc';

function Template({title, desc1, desc2, image, formType, setIsLoggedIn}){
    return(
        <div className=" flex justify-between w-11/12 max-w-[1060px] mx-auto py-2 gap-x-12 gap-y-0 overflow-x-hidden">
            
            <div className=" w-11/12 max-w-[450px]">
                <h2 className=" text-white font-semibold text-[1.875rem] leading-[2.375rem] ">
                    {title}
                </h2>
                <p className="text-[1.125rem] leading-[1.625rem] mt-4">
                    <span className=" text-[#99a0a4]">{desc1}</span>
                    <br></br>
                    <span className=" text-blue-300 italic">{desc2}</span>
                </p>

                {
                    formType === 'signup' ? 
                    (<SignUpForm setIsLoggedIn={setIsLoggedIn}/>) :
                    (<LogInForm setIsLoggedIn={setIsLoggedIn}/>)
                }

                <div className="flex w-full items-center my-4 gap-x-2">
                    <div className="w-full h-[1px] bg-[#696e717e]"></div>
                    <p className=" text-[#696e717e] font-medium leading-[1.375rem]">OR</p>
                    <div className="w-full h-[1px] bg-[#696e717e]"></div>
                </div>

                <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-[#b6bbbfa8] 
                border border-[#b6bbbf55] px-[12px] py-[8px] gap-x-2 mt-5">
                    <FcGoogle />
                    <p>Sign Up with Google</p>
                </button>
            </div>
            
            <div className=" w-11/12 max-w-[400px]">
                <img src={image}
                width={558}
                height={504}
                loading="lazy"
                className=" h-[400px] rounded-md">
                </img>
            </div>
        </div>
    )
}

export default Template;