// src/utils/locations.js
import { Country, State, City } from 'country-state-city';

export const getAllCountries = () => Country.getAllCountries();

export const getStatesByCountry = (countryCode) => 
  State.getStatesOfCountry(countryCode);

export const getCitiesByState = (stateCode, countryCode) => 
  City.getCitiesOfState(countryCode, stateCode);
