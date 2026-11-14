import "./Title.css"

const Title = ({ subTitle, title, light = false, align = "center" }) => {
  return (
    <div className={`title title-${align} ${light ? "title-light" : ""}`}>
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  )
}

export default Title
