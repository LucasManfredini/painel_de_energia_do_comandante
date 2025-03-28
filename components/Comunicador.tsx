"use client"

import { useState } from "react";

export default function Comunicador() {
    const [msg, setMensagem] = useState('');
    const [historico, setHistorico] = useState<string[]>([]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setMensagem(e.target.value);
    }

    function enviarMensagem() {
        if (msg.trim() === '') return; // Impede envio de mensagens vazias

        setHistorico(prevHistorico => [msg, ...prevHistorico]); // Adiciona a mensagem ao histórico
        setMensagem(''); // Limpa o campo após o envio
    }

    return (
        <div className="bg-gray-100 p-8 rounded-2xl shadow-xl max-w-md mx-auto border border-gray-300">
            <h2 className="text-3xl font-bold text-green-700 text-center mb-4">COMUNICADOR</h2>

            <label className="block text-lg font-medium text-gray-700 mb-2">
                Mensagem:
            </label>

            <input type="text" value={msg} placeholder="Digite sua mensagem" onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <button onClick={enviarMensagem} className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
            >
                Enviar
            </button>

            <h3 className="text-xl font-semibold text-gray-800 mt-6">Histórico:</h3>
            <ul className="bg-white p-4 rounded-lg border border-gray-200 mt-2 max-h-40 overflow-y-auto shadow-inner">
                {historico.length > 0 ? (
                    historico.map((mensagem, index) => (
                        <li key={index} className="text-gray-700 border-b last:border-none py-1">
                            {mensagem}
                        </li>
                    ))
                ) : (
                    <p className="text-gray-500 text-center">Nenhuma mensagem enviada.</p>
                )}
            </ul>
        </div>
    );
}