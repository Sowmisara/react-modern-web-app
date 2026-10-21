import sowmi from './assets/Sowmi.jpeg'
// import PropTypes from 'prop-types'



function Course({id = 0,img = sowmi,  heading = "Just Chill Bro",
     content = "HEHEHEHEHEHEHEHEHEHE",ratings = 0,show = true}){
    const styles = {
        fontSize : 20,
    }
    // if(show){
    return show && heading != null && (
        <div className="card" id={id}>
            <img src={img} alt="course" />
            <h3>{heading}</h3>
            <p>{content}</p>           
            <h3 style={{color:"red"}}><span style={styles}>Ratings :</span>{ratings}</h3>
        </div>
    );
   // }
}

// Course.propTypes = {
//     img: PropTypes.string,
//     heading: PropTypes.string,
//     content: PropTypes.string,
//     ratings: PropTypes.number
// }

export default Course;