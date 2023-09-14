import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title: String;

    containerStyles?: String;

    handleClick?: MouseEventHandler<HTMLButtonElement>;
    
    btnType?:"button" | "submit"
}

export interface SearchManufacturerProps{
    manufacturer: String;
    setManufacturer: (manufacturer : String)=> void;
}

export interface CarProps{
    city_mpg:23
    class:"compact car"
    combination_mpg:24
    cylinders:4
    displacement:1.6
    drive:"fwd"
    fuel_type:"gas"
    highway_mpg:26
    make:"toyota"
    model:"corolla"
    transmission:"a"
    year:1993
}