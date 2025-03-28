export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4 border-t border-gray-700">
            <div className="container mx-auto text-center">
                <p className="text-lg font-semibold">
                    {new Date().getFullYear()} - Frota Estelar!
                </p>
            </div>
        </footer>
    );
}