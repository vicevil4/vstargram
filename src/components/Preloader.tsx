'use client';
import { ScaleLoader } from "react-spinners";

export default function Preloader() {
  return (
    <>
      <div>
        <ScaleLoader
          color="#aaa"
          speedMultiplier={3} loading={true} />
      </div>
    </>

  )
}