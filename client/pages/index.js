import React from 'react';
import MainLayout from '../layouts/MainLayout'


export default function Home() {
  return (
    <>
    <MainLayout>
    <div className="center">
    <h1>Добро пожаловать!</h1>
   <h4>Здесь собраны лучшие треки!</h4>
    </div>
 


  
    </MainLayout>
    <style jsx>
  {`
  .center {
      margin-top:150px;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      
     
    `
    
  }
  </style>
  
    </>
  )
}
