"use client"

import { useEffect, useState } from "react"

export default function TempoEstelar() {
    const [hora, setHora] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalo = setInterval(atualizarHora, 1000);
        return () => clearInterval(intervalo);
    }, []);

    function atualizarHora() {
        setHora(new Date().toLocaleTimeString());
    }

    return (
        <div className="bg-gray-100 p-8 rounded-2xl shadow-xl max-w-sm mx-auto border border-gray-300 text-center">
            <h2 className="text-3xl font-bold text-green-700 mb-4">Hora em Tempo Real</h2>
            <p className="text-2xl font-semibold text-gray-800 transition-all duration-500">
                {hora}
            </p>
        </div>
    );
};