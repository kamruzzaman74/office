import"./About.css";
function Aboutdata(props){
    return(

        <div  className="a-card">


            <div className="a-image">




                <img src={props.image}alt="image"/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    );




}
export default Aboutdata;