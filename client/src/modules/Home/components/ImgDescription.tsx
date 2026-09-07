import Image from "next/image";
import Me from "../../../assets/Me.jpg";

export function ImgDescription() {
    return(
        <div className="">
            <Image
                className="mask_image"
                src={Me}
                alt="Artem"
                width="auto"
                height="auto"
                loading="eager"
            />
        </div>
    )
}