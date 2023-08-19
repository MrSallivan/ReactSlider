import "./TextContent.css"
import { GradientTitle } from "../GradientTitle/GrsdientTitle"
import IconButton from "../IconButton/IconButton"

export const TextContent = () => {
  return (
    <div className="text-content">
      <GradientTitle>Meet our speakers</GradientTitle>
      <p className="text-content__grid">
        Our speaker lineup comprises leaders from Stripe and beyond, who’ll
        share knowledge and advice on the most pressing topics facing companies
        today. Stay tuned for more announcements.
        <div className="actions">
          <IconButton direction="left" disable />
          <IconButton direction="right" onClick={()=>alert("click")} />
        </div>
      </p>
    </div>
  )
}
