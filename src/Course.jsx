



function Course(props){
    const heading = "Code IO";

    const styles = {
        fontSize : 20,
    }

    return (
        <div className="card">
            <img src={props.img} alt="course" />
            <h3>{props.heading}</h3>
            <p>{props.content}</p>
            <h3 style={{color:"red"}}><span style={styles}>Ratings :</span>{props.ratings}</h3>
        </div>
    );
}

export default Course;