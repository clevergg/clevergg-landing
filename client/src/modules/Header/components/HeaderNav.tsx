import Link from "next/link";
import { IconBrandGithub } from '@tabler/icons-react';
import { IconBrandTelegram } from '@tabler/icons-react';
import { IconBrandLinkedinFilled } from '@tabler/icons-react';


export function HeaderNav() {
    return (
        <nav className="flex flex-row justify-between gap-15 items-center">
            <ul className="flex flex-row gap-6 text-xl">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/Experience">Experience</Link></li>
                <li><Link href="/portfolio">Portfolio</Link></li>
            </ul>
            <ul className="flex flex-row gap-3 items-center">
                <li><Link href="https://github.com/clevergg"><IconBrandGithub className="text-[#B292FF] hover:text-white" /></Link></li>
                <li><Link href="https://t.me/CleveRgg0"><IconBrandTelegram className="text-[#B292FF] hover:text-white" /></Link></li>
                <li><Link href="https://www.linkedin.com/in/clevergg"><IconBrandLinkedinFilled className="text-[#B292FF] hover:text-white" /></Link></li>
            </ul>
        </nav>
    )
}