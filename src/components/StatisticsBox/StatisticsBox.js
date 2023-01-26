
import './StatisticsBox.css'





const StatisticsBox = (props) => {
return(
    
<div className="statistics-box" style={{backgroundColor:`${props.backgroundColor}`}}>
    <div className="icon-box"><i class={props.icon}></i></div>
    <div className="statistics-text">
       <h2>{props.price + "k"}</h2> 
       <p>{props.title}</p>
    </div>
</div>
)
}


export default StatisticsBox