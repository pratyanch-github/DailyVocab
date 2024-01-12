import QuesSol from "./QuesSol";
import {Link} from "react-router-dom"

const DailyQuestion = () => {
  // write logic to choose random question from dataContext

  // write logic
  let num = Math.floor(Math.random() * 100);

  return (
    <>
      This is daily question for today
      {/* write condition to load quessol or shimmer */}
       
      <Link to={`../${num}`}>
           <h3> todays ques is {num} </h3> 
      </Link>
      <QuesSol></QuesSol>
    </>
  );
};

export default DailyQuestion;
