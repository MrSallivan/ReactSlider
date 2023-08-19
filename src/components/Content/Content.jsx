import { GradientTitle } from "../GradientTitle/GrsdientTitle"
import IconButton from "../IconButton/IconButton"
import { Slider } from "../Slider/Slider"
import image1 from "../../assets/images/Image_1.png"
import image2 from "../../assets/images/Image_2.png"
import image3 from "../../assets/images/Image_3.png"
import image4 from "../../assets/images/Image_4.png"
import image5 from "../../assets/images/Image_5.png"
import image6 from "../../assets/images/Image_6.png"
import "./Content.css"

const sliderData = [
  {
    label: "CEO AND COFOUNDER, ARKETA",
    title: "Rachel Lea Fishman",
    img: image1
  },
  {
    label: "CEO AND COFOUNDER, ARKETA",
    title: "Josan Fan",
    img: image2
  },
  {
    label: "CEO, OPENAI",
    title: "Sam Altman",
    img: image3
  },
  {
    label: "SVP OF PRODUCT, JOBBER",
    title: "Jeff Sheclock",
    img: image4
  },
  {
    label: "HEAD OF STRATEGY, SARDINE",
    title: "Simon Taylor",
    img: image5
  },
  {
    label: "HEAD OF GLOBAL SALES, STRIPE",
    title: "Eileen O\'Mara",
    img: image6
  }
]

export const Content = () => {
  return (
    <div className="content">
      <GradientTitle>Meet our speakers</GradientTitle>
      <div className="content__grid">
        <p>
          Our speaker lineup comprises leaders from Stripe and beyond, who’ll
          share knowledge and advice on the most pressing topics facing
          companies today. Stay tuned for more announcements.
        </p>
      </div>
      <Slider data={sliderData} />
    </div>
  )
}
