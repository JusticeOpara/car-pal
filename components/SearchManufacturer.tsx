"use client"
import { useState, Fragment } from 'react'
import Image from 'next/image'
import { SearchManufacturerProps } from '../types'
import { Combobox, Transition } from '@headlessui/react'
import { manufacturers } from '../constants'

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
    const [query, setQuery] = useState("")

    const filteredManufacturers = query === "" ? manufacturers :
        manufacturers.filter((items) => (
            items.toLowerCase()
                .replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
        ))
    console.log(filteredManufacturers, "--filteredManufacturers")

    return (
        <div className="search-manufactuter">
            <Combobox>
                <div className='relative w-full'>

                    <Combobox.Button className="absloute top-[14px]">
                        <Image src="/car-logo.svg" alt='Car Logo' width={20} height={20} className='ml-4' />
                    </Combobox.Button>

                    <Combobox.Input
                        className="search-manfacturer__input"
                        placeholder="VolksWogan"
                        displayValue={(manufacturer: string) => manufacturer}
                        onChange={(e) => setQuery(e.target.value)} />

                    <Transition
                        as={Fragment}
                        leave='transtion ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                        afterLeave={() => setQuery('')}>

                        <Combobox.Options className="">
                            {filteredManufacturers.length === 0 && query !== " " && (
                                <Combobox.Option
                                vaule={query}>

                                </Combobox.Option>
                            )} 
                        </Combobox.Options>

                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacturer