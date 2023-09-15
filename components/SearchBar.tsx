"use client"
import { SearchManufacturer } from "."
import { useState } from "react"
import Image from "next/image"


interface SearchButtonProps {
    otherClasses: string;
}

const SearchButton = ({ otherClasses }: SearchButtonProps) => {

    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>

        <Image src="./magnifying-glass.svg" alt="magnifing-glass" width={40} height={40} className="object-contain" />

    </button>
}

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState("")
    const [model, setModel] = useState("")

    const handleSearch = () => {

    }

    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className="searchbar__item bg-orange-400 ">
                <SearchManufacturer
                    manufacturer={manufacturer}
                    setManufacturer={setManufacturer}
                />

                <SearchButton className="sm:hidden bg-red-500" />
            </div>

            <div className="searchbar__item">
                <Image
                    src="/model-icon.png" width={25} height={25} className="absolute w-[20px] h-[20px] ml-4" alt="model-icon" />
                <input type="text" name="" value={model} onClick={(e) => setModel(e.target.value)}
                    placeholder="Tiguan" className="searchbar__input" />

                <SearchButton otherClasses="sm:hidden" />
            </div>
            <SearchButton className="max-sm:hidden" />
        </form>
    )
}

export default SearchBar