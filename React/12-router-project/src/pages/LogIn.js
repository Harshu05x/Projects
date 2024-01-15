import Template from "../components/Template";
import log_in_img from "../assets/log_in_img.jpg"

function LogIn({setIsLoggedIn}){
    return(
        <div>
            <Template 
                title="Welcome Back"
                desc1="Build skills for today, tomorrow and beyond."
                desc2="Education to future-proof your career."
                image={log_in_img}
                formType="Login"
                setIsLoggedIn={setIsLoggedIn}
            />
        </div>
    )
}

export default LogIn;