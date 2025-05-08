import { Header } from "./components/Header/Header";
import { Welcome } from "./components/Welcome/Welcome";
import { FoodList } from "./components/FoodList/FoodList";
import {Order} from './components/Order/Order'
import { Product } from "./components/Product/Product";
import { Feedback } from "./components/Feedback/Feedback";
import { Download } from "./components/DownloadPage/Download";
import { FC } from "react";
 export const App : FC =()=>{
  return(
    <>
    <Header/>
    <Welcome/>
    <FoodList/>
    <Order/>
    <Product/>
    <Feedback/>
    <Download/>
    </>
  )
}