import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { CreateOrganization } from "@clerk/nextjs"
import Image from "next/image"

export const EmptyOrg = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <Image
                width={200}
                height={200}
                src={"/elements.svg"}
                alt="Empty"
            />
            <h2 className="text-2xl font-semibold mt-6">
                Welcome to Board
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
                Create an organization to get started
            </p>
            <div className="mt-4"> 
                <Dialog>
                    <DialogTrigger asChild>
                        <Button size={"lg"}>
                            Create Org
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
                        <CreateOrganization />
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}