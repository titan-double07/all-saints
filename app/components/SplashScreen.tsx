import React from 'react'

export default function SplashScreen({ children }: { children: React.ReactNode }) {
    const loading = true
  return (
    <div className=" ">
      {loading ? <p>loading</p> : <>{children}</>}{" "}
    </div>
  );
}
