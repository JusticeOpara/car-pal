"use client"
import { useRouter } from "next/navigation";
import { ShowMoreProps } from "../types";
import { CustomButton } from ".";
import { updateSearchParams } from "../utils";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
    const handleNavgiation = () => {
        const newLimit = (pageNumber + 1) * 10
        const newPathName = updateSearchParams("limit", String(newLimit))
        router.push(newPathName)
    }
    const router = useRouter()
    return (
        <div className="w-full flex-center gap-5 mt-10">
            {!isNext && (
                <CustomButton
                    title="Show More"
                    btnType="button"
                    containerStyles="bg-primary-blue rounded-full text-white"
                    handleClick={handleNavgiation}
                />
            )}
        </div>
    )
}

export default ShowMore