import { createBrowserRouter } from "react-router-dom";
import Countries from "../components/Countries";

export const router  = createBrowserRouter([
    {path:'/',
        loader:async() =>{
            return fetch('https://restcountries.com/v3.1/all');
        },
     element:<Countries></Countries>}
]);