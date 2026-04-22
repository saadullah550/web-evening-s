function Card( {img,  title, decs}) {
    return(
        <div >
            <div className="card">
                <img src={ img} alt="" className="img" />
                <h1>   {title}</h1>
                <p className="para"> {decs} </p>
                <button className="btn">Learn More</button>
            </div>
            
        </div>
    )
}
export default Card;    