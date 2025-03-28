import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-gray-600 text-white py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-6">
                <h1 className="text-2xl font-bold">PAINEL DE CONTROLE</h1>
            </div>
        </header>
    );
}