import { useState } from "react";
import Card from "./Card";

function Cards(props){
    let courses = props.courses;
    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);

    function getCourses(){
        if(category === "All"){
            let allCourses = [];
            Object.values(courses).forEach( array =>{
                array.forEach(course => {
                    allCourses.push(course);
                });
            })
            return allCourses;   
        }  
        else
            return courses[category];
    }

    return(
        <div className="cards">
            {
                getCourses().map( (course) => {
                    return <Card 
                        course={course} key={course.id}
                        likedCourses={likedCourses}
                        setLikedCourses={setLikedCourses}></Card>
                })
            }
        </div>
    )
}

export default Cards;