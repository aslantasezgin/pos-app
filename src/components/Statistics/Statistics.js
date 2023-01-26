

import StatisticsBox from '../StatisticsBox/StatisticsBox'
import './Statistics.css'


const StatisticsJSON = [
    {
       price:"321.4",
       icon:"fa-solid fa-basket-shopping",
       title:"Sales",
       backgroundColor:"#6571FF"
    },
    {
        price:"137896.6",
        icon:"fa-solid fa-hand-holding-dollar",
        title:"Purchases",
        backgroundColor:"#0AC074"
     },

     {
        price:"12.3",
        icon:"fa-solid fa-arrow-right",
        title:"Sales Returns",
        backgroundColor:"#0099FB"
     },

     {
        price:"3.5",
        icon:"fa-solid fa-arrow-left",
        title:"Purchases Returns",
        backgroundColor:"#E83E8C"
     },

     {
        price:"321.4",
        icon:"fa-solid fa-basket-shopping",
        title:"Sales",
        backgroundColor:"#6F42C1"
     },
     {
         price:"137896.6",
         icon:"fa-solid fa-hand-holding-dollar",
         title:"Purchases",
         backgroundColor:"#FFB821"
      },
 
      {
         price:"12.3",
         icon:"fa-solid fa-arrow-right",
         title:"Sales Returns",
         backgroundColor:"#00C6FF"
      },
 
      {
         price:"3.5",
         icon:"fa-solid fa-arrow-left",
         title:"Purchases Returns",
         backgroundColor:"#FF0000"
      },
]


const Statistics = () => {
return(
    <div className="statistics-wrapper">
    {StatisticsJSON.map((item) => {
        return (
            <StatisticsBox icon={item.icon} title={item.title} price={item.price} backgroundColor={item.backgroundColor}></StatisticsBox>
        )
    })}

    </div>
)

}

export default Statistics