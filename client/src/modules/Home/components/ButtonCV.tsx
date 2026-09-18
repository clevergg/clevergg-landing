import Link from "next/link";

export function ButtonCV() {
    return(
        <div className="flex flex-col gap-6 md:gap-20 md:flex-row items-center">
            <Link href="#cv" className="button">
                Download CV
            </Link>

            <Link href="/experience">
                See experience
            </Link>
        </div>
    )
}