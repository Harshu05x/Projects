import Template from "../components/Template";
import sign_in_img from "../assets/sign_in_img.jpg"

function SignUp({setIsLoggedIn}){
    return(
        <div>
            <Template 
                title="Join the millions learing to code with StudyNotion for free"
                desc1="Build skills for today, tomorrow and beyond."
                desc2="Education to future-proof your career."
                image={sign_in_img}
                formType='signup'
                setIsLoggedIn={setIsLoggedIn}
            />
        </div>
    )
}

export default SignUp;