import CardPannel from "../../components/CardPannel"
import HeadLine from "../../components/HeadLine"
import Carousol from "./Carousol"


function Home() {
  return (
    <div>
        <Carousol/>
        <HeadLine text={'Heading'} pera={'Three categories available for the time being. They are Web Development, Graphics Design and Digital Marketing. Browse them by clicking on the tabs below'}/>
        <CardPannel/>
    </div>
  )
}

export default Home