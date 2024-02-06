import Image from "next/image"

export const EmptyFavorites = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <Image
                width={200}
                height={200}
                src={"/empty-favorites.svg"}
                alt="Empty"
            />
            <h2 className="text-muted-foreground text-sm mt-6">
                Favorites is not Available
            </h2>
        </div>
    )
}