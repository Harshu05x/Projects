import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import { toast } from 'react-toastify';

function App() {

    const [formData,setFormData] = useState( {
        firstName: "",
        lastName: "",
        email: "",
        country: "India",
        streetAddress: "",
        city:"",
        state: "",
        pinCode: "",
        candidates:false,
        comments:false,
        offers:false,
        notificationStatus: ""
    })

    // Handles any chnage occured in form elements
    function changeHandler(event){
        const {name,value,type,checked} = event.target;
        setFormData( prevData => {
            return {
                ...prevData,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    // Stops default action of submit button and prints data of form
    function submitHandler(event){
        event.preventDefault();
        toast.success("Form Submitted");
        console.log("Printing form data" , formData);
        setFormData(() => {
            return{
                firstName: "",
                lastName: "",
                email: "",
                country: "India",
                streetAddress: "",
                city:"",
                state: "",
                pinCode: "",
                candidates:false,
                comments:false,
                offers:false,
                notificationStatus: ""
            }
        })
    }

    return( 
        <div className='App h-[100vh] w-[100vw]'> 
            <form className=' w-[60vw] flex flex-col mx-auto gap-2 mt-2 border p-2 border-gray-400 rounded-md'
            onSubmit={submitHandler}>

                {/* First Name field */}
                <div className='flex flex-col gap-1'>
                    <label htmlFor='firstName'
                        className=' font-bold'>First Name</label>
                    <input
                    type='text'
                    className=' border border-black rounded-md py-1 px-2'
                    id='firstName'
                    name='firstName' 
                    onChange={changeHandler}
                    value={formData.firstName}
                    placeholder='Enter First Name'></input>
                </div>
                
                {/* Last Name field */}
                <div className='flex flex-col gap-1'>
                    <label htmlFor='lastName'
                        className=' font-bold'>Last Name</label>
                    <input
                    type='text'
                    className=' border border-black rounded-md py-1 px-2'
                    id='lastName'
                    name='lastName' 
                    onChange={changeHandler}
                    value={formData.lastName}
                    placeholder='Enter First Name'></input>
                </div>

                {/* Email Id field */}
                <div className='flex flex-col gap-1'>
                    <label htmlFor='email'
                        className=' font-bold'>Email Address</label>
                    <input
                    type='mail'
                    className=' border border-black rounded-md py-1 px-2'
                    id='email'
                    name='email'
                    onChange={changeHandler}
                    value={formData.email}
                    placeholder='xyz@gmail.com'></input>
                </div>

                {/* Country dropdown */}
                <div className='flex flex-col gap-1'>
                    <label htmlFor='country' className='font-bold'>Country</label>
                    <select 
                    className='border border-black rounded-md py-1 px-2'
                    id='country'
                    name='country'
                    value={formData.country}
                    onChange={changeHandler}>
                        <option value='India'>India</option>
                        <option value='USA'>USA</option>
                        <option value='Russia'>Russia</option>
                        <option value='UK'>UK</option>
                    </select>
                </div>
            
                {/* Street Address field */}
                <div className='flex flex-col gap-1'>
                    <label htmlFor='street-address'
                        className=' font-bold'>Street Address</label>
                    <input
                    type='text'
                    className=' border border-black rounded-md py-1 px-2'
                    id='street-address'
                    name='streetAddress' 
                    value={formData.streetAddress}
                    onChange={changeHandler}
                    placeholder='123 Main st'></input>
                </div>

                {/* City field */}
                <div className='flex flex-col gap-1'>
                    <label htmlFor='city'
                        className=' font-bold'>City</label>
                    <input
                    type='text'
                    className=' border border-black rounded-md py-1 px-2'
                    id='city'
                    name='city' 
                    value={formData.city}
                    onChange={changeHandler}
                    placeholder='xyz'></input>
                </div>

                {/* State field */}
                <div className='flex flex-col gap-1'>
                    <label htmlFor='state'
                        className=' font-bold'>State</label>
                    <input
                    type='text'
                    className=' border border-black rounded-md py-1 px-2'
                    id='state'
                    name='state' 
                    onChange={changeHandler}
                    value={formData.state}
                    placeholder='Maharashtra'></input>
                </div>

                {/* Pincode field */}
                <div className='flex flex-col gap-1'>
                    <label htmlFor='pin'
                        className=' font-bold'>PinCode</label>
                    <input
                    type='text'
                    className=' border border-black rounded-md py-1 px-2'
                    id='pin'
                    name='pinCode'
                    value={formData.pinCode}
                    onChange={changeHandler} 
                    placeholder='123-456'></input>
                </div>

                {/* CheckBoxes */}
                <div className=' flex flex-col gap-2'>
                    <p className='font-bold'>By Email</p>
                    {/* Checkbox - 1. Comments */}
                    <div className=' flex flex-col'>
                        <div className='flex gap-2 items-center'>
                            <input type='checkbox'
                            name='comments'
                            id='comments'
                            checked={formData.comments}
                            onChange={changeHandler}
                            ></input>
                            <label htmlFor='comments' className='font-bold'>Comments</label>
                        </div>
                        <p className=' ml-5 opacity-90'>Get notified when someone posts a comment on a posting.</p>
                    </div>
                    {/* Checkbox - 2. Candidates */}
                    <div className=' flex flex-col'>
                        <div className='flex gap-2 items-center'>
                            <input type='checkbox'
                            name='candidates'
                            id='candidates'
                            checked={formData.candidates}
                            onChange={changeHandler}
                            ></input>
                            <label htmlFor='candidates' className='font-bold'>Candidates</label>
                        </div>
                        <p className=' ml-5 opacity-90'>Get notified when a candidate apply for a job.</p>
                    </div>
                    {/* Checkbox - 3. Offers */}
                    <div className=' flex flex-col'>
                        <div className='flex gap-2 items-center'>
                            <input type='checkbox'
                            name='offers'
                            id='offers'
                            checked={formData.offers}
                            onChange={changeHandler}
                            ></input>
                            <label htmlFor='offers' className='font-bold'>Offers</label>
                        </div>
                        <p className=' ml-5 opacity-90'>Get notified when a candidate accept or reject an offer.</p>
                    </div>
                </div>

                {/* Radio buttons */}
                <div className=' flex flex-col gap-2'>
                    <div>
                        <p className='font-bold'>Push Notifications</p>
                        <p className='opacity-90'>These are delivered via SMS to your mobile phone.</p>
                    </div>
                    <div className=' flex flex-col gap-3'>
                        {/* Radio button - 1. Everything */}
                        <div className='flex gap-2 items-center'>
                            <input type='radio'
                            name='notificationStatus'
                            id='everything'
                            value='Everything'
                            checked={formData.notificationStatus === "Everything"}
                            onChange={changeHandler}
                            ></input>
                            <label htmlFor='everything' className='font-bold'>Everything</label>
                        </div>
                        {/* Radio button - 2. Same as Email */}
                        <div className='flex gap-2 items-center'>
                            <input type='radio'
                            name='notificationStatus'
                            id='same-as-email'
                            value='Same as Email'
                            checked={formData.notificationStatus === 'Same as Email'}
                            onChange={changeHandler}
                            ></input>
                            <label htmlFor='same-as-email' className='font-bold'>Same as email</label>
                        </div>
                        {/* Radio button - 3. No push Notifications */}
                        <div className='flex gap-2 items-center'>
                            <input type='radio'
                            name='notificationStatus'
                            id='no-push-notifications'
                            value='No push Notifications'
                            checked={formData.notificationStatus === 'No push Notifications'}
                            onChange={changeHandler}
                            ></input>
                            <label htmlFor='no-push-notifications' className='font-bold'>No push notifications</label>
                        </div>
                    </div>
                </div>
                
                {/* save button */}
                <button className=' bg-blue-500 text-white w-[100px] rounded-md p-1'>Save</button>
            </form>
        </div>

    )
}

export default App;
