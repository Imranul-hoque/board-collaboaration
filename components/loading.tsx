import Image from "next/image"
import Link from "next/link"

export const Loading = () => {
    return (
        <div className="flex items-center justify-center h-full">
            <Image
                width={100}
                height={100}
                src={'/logo.svg'}
                alt="Logo"
                className="animate-pulse duration-500"
            />
        </div>
    )
}