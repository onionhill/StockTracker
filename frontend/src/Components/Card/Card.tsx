import React from 'react'
import "./Card.css"
interface CardProps {
    companyName: string;
    ticker: string;
    price: number;
}

const Card: React.FC<CardProps> = ({companyName, ticker, price}: CardProps)  : JSX.Element => {
  return (
    <div className='flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row"'>
        <img 
            src="https://images.unsplash.com/photo-1534951009808-766178b47a4f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Images" 
        />
        <div className="details">
            <h2>{companyName} ({ticker})</h2>
            <p>${price}</p>
        </div>
        <p className="info">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, nisi?
        </p>
    </div>
  )
}

export default Card