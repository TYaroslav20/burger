
import { Header } from "./components/Header/Header";
import { Welcome } from "./components/Welcome/Welcome";
import { FoodList } from "./components/FoodList/FoodList";
import { FC } from "react";
 export const App : FC =()=>{
  return(
    <>
    <Header/>
    <Welcome/>
    <FoodList/>
    </>
  )
}