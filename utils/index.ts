import axios, { AxiosRequestConfig } from 'axios';

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};


export async function getCarsByModel(model: string): Promise<any> {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
    params: { model },
    headers: {
      'X-RapidAPI-Key': '464c094e71msh8f9b602b941bccfp1d5cafjsn3b122c1a90dc',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response,"--response")
    return response.data;
  } catch (error) {
    throw error;
  }
}

// // Example usage:
// getCarsByModel('corolla')
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });


