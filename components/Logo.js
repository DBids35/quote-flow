import Link from "next/link";
import Image from "next/image";
export default function Logo() {
    return (
        <Link href={`/`}>
            <div id="logo" className="cursor-pointer">
                <div className="block">
                    <Image src="/framed-logo.svg" width={85} height={43} />
                </div>
            </div>
        </Link>
    )
}