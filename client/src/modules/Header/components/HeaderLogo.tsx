import Image from 'next/image'
import SpectreLogo from '../../../assets/SpectreLogo.svg'

export function HeaderLogo() {
    return (
        <div className="max-sm:hidden items-center">
            <Image
            src={SpectreLogo}
            alt="Spectre Logo"
            width={32}
            height={32}
            />
        </div>
    )
}