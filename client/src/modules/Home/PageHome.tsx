import { ImgDescription } from "./components/ImgDescription";
import { MeDescription } from "./components/MeDescription";
import { ButtonCV } from "./components/ButtonCV";

export function PageHome() {
    return(
        <section className="flex items-center justify-around gap-20">
            <div className="flex flex-col gap-12 max-w-3xl">
                <MeDescription />
                <ButtonCV />
            </div>
            <ImgDescription />
        </section>
    )
}
