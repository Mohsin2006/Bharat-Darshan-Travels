import "./Programs.css";
// import program_1 from "../../assets/program-1.png";
// import program_2 from "../../assets/program-2.png"
// import program_3 from "../../assets/program-3.png"
import program_icon_1 from "../../assets/program-1.jpeg"
import program_icon_2 from "../../assets/program-2.jpeg"
import program_icon_3 from "../../assets/program-3.jpeg"

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program_icon_1} alt="" />
        <div className="caption">
            <img src={program_icon_1} alt="" />
            <p>Toyota Fortuner</p>
        </div>
      </div>
      <div className="program">
        <img src={program_icon_2} alt="" />
        <div className="caption">
            <img src={program_icon_2} alt="" />
            <p>Kea Seltos</p>
        </div>
      </div>
      <div className="program">
        <img src={program_icon_3} alt="" />
        <div className="caption">
            <img src={program_icon_3} alt="" />
            <p>Mahindra Scorpio</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
