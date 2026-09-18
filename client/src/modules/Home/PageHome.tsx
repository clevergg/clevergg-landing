import { ImgDescription } from "./components/ImgDescription";
import { MeDescription } from "./components/MeDescription";
import { ButtonCV } from "./components/ButtonCV";
import {SliderSection} from "../Slider/SliderSection";

export function PageHome() {
    return(
    <>   
        <section className="mx-8 flex gap-10 flex-col-reverse md:flex md:flex-row md:items-center md:gap-20 md:justify-center items-center pt-[calc(7rem+7vw)] pb-[calc(3rem+3vw)]">
            <div className="flex flex-col gap-12  ">
                <MeDescription />
                <ButtonCV />
            </div>
            <ImgDescription />
        </section>
        <SliderSection />
    </> 
    )
}
