import Image from "next/image"

export const EmptySearch = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <Image
                width={200}
                height={200}
                src={"/empty-search.svg"}
                alt="Empty"
            />
            <h2 className="text-muted-foreground font-semibold mt-6">
                Search result Not found
            </h2>
        </div>
    )
}