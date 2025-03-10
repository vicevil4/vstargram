'use client';
import { ScaleLoader } from "react-spinners";

export default function Preloader() {
  return (
    <>
      <ScaleLoader speedMultiplier={3} loading={true} />
    </>

  )
}