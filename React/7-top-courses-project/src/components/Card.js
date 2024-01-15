import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card(props){
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler(){

        if(likedCourses.includes(course.id)){
            setLikedCourses( (prev) =>
                prev.filter((cid) => (cid !== course.id))
            )
            toast.warning("Like removed");
        }
        else{
            if(likedCourses.length === 0)
                setLikedCourses([course.id]);
            else    
                setLikedCourses((prev) => [...prev,course.id]);
            toast.success("Liked Successfully");
        }
    }

    return(
        <div className="card">
            <div className="image">
                <img src={course.image.url}></img>

                <div className="likebtn">
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id) ? 
                                (<FcLike fontSize='1.5rem'/>) : 
                                (<FcLikePlaceholder fontSize='1.5rem'/>)
                        }
                    </button>
                </div>
            </div>
            <div className="courseDesc">
                <p className="title">{course.title}</p>
                <p className="desc">
                    {
                        course.description.length > 100 ?
                        (course.description.substr(0,100)) + '...' :
                        (course.description)
                    }
                </p>
            </div>

        </div>
    );
}

export default Card;