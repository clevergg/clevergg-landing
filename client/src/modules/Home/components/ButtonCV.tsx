import Link from "next/link";

export function ButtonCV() {
    return(
        <div className="flex gap-20 items-center">
            <Link href="#cv" className="button">
                Download CV
            </Link>

            <Link href="/experience">
                See experience
            </Link>
        </div>
    )
}