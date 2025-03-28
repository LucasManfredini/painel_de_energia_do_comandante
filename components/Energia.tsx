"use client"
import { useState } from "react"

export default function Energia() {
    const [bateria, setEnergia] = useState(100); 

    function reduzir() {
        setEnergia(prev => Math.max(prev - 10, 0)); 
    }

    function recarregar() {
        setEnergia(100);
    }

    return (
        <div className="bg-gray-100 p-8 rounded-2xl shadow-xl max-w-sm mx-auto border border-gray-300">
            <h2 className="text-3xl font-bold text-green-700 text-center mb-4">ENERGIA</h2>
            <p className="text-xl text-gray-800 text-center my-4">
                Valor Atual: <span className="font-bold text-green-600">{bateria}</span>
            </p>
            <div className="flex justify-center gap-6">
                <button 
                    onClick={reduzir} 
                    className="bg-red-500 text-white text-lg px-5 py-3 rounded-xl hover:bg-red-600 transition-all duration-200"
                >
                    Reduzir
                </button>
                <button 
                    onClick={recarregar} 
                    className="bg-green-500 text-white text-lg px-5 py-3 rounded-xl hover:bg-green-600 transition-all duration-200"
                >
                    Recarregar
                </button>
            </div>
        </div>
    );
};