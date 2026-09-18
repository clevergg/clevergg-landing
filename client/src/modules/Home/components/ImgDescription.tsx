import Image from "next/image";
import Me from "../../../assets/MeBlob.png";

export function ImgDescription() {
    return(
        <div className="flex justify-center">
            <Image
                className="object-cover h-auto max-w-[calc(8rem+10vw)] max-h-[calc(8rem+10vw)] md:max-w-[calc(8rem+20vw)] md:max-h-[calc(8rem+20vw)]  "
                src={Me}
                alt="Artem"           
                loading="eager"
            />
        </div>
    )
}