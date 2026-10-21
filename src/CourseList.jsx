import Sowmi from './assets/Sowmi.jpeg'
import Shampoo from './assets/SHAMPOO.jpeg'
import Contioner from './assets/conditoner.jpeg'
import Course from './Course.jsx'

function CourseList() {
   const courses = [
    {
        id : 1,
        img: Sowmi,
        heading: "Sowmi",
        content: "This is a Cute Girl",
        ratings: 5,
        show : true
    },
    {
        id : 2,
      img: Shampoo,
      heading: "Shampoo",
      content: "This is a Shampoo Course",  
      ratings: 3,   
      show: true
    },
    {
        id : 3,
        img: Contioner,
        heading: "Contioner",
        content: "This is a Contioner Course",
        ratings: 4,
        show:true
    }
   ]
  
   courses.sort((x , y) => y.ratings - x.ratings);

    const filteredCourses = courses.filter((course) => course.ratings >= 3);

   return (
    filteredCourses.map((course,index) => (<Course id={index} img={course.img} heading={course.heading} content={course.content} ratings={course.ratings} show={course.show}/>))
   );
   

}

export default CourseList;