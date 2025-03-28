"use client"

import Comunicador from "@/components/Comunicador"
import Energia from "@/components/Energia"
import TempoEstelar from "@/components/TempoEstelar"



export default function Home(){
  return(
    <>
      <hr/>
      <Energia />
      <hr/>
      <Comunicador />      
      <hr/>
      <TempoEstelar />
    </>
  )
}