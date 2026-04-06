import { useState } from 'react';
import { api } from '../services/api'; 

export default function UserForm({ onUserCreated }) {
    const [alias, setAlias] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccessMessage(null);

        try {
            // toda la lógica pesada de headers, body y fetch se fue al servicio
            await api.registerUser(alias, password);

            setAlias('');
            setPassword('');
            setSuccessMessage('El usuario fue creado correctamente.');
            onUserCreated(); 

        } catch (err) {
            setError(err.message);
        }
    };

    const handleAliasChange = (e) => {
        setAlias(e.target.value);
        setError(null);
        setSuccessMessage(null);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setError(null);
        setSuccessMessage(null);
    };

    return (
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Registrar Nuevo Usuario</h3>
            
            {error && (
                <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-sm text-red-700">
                    <p className="font-medium">{error}</p>
                </div>
            )}

            {successMessage && (
                <div className="mb-4 p-3 bg-green-50 border-l-4 border-green-500 text-sm text-green-700">
                    <p className="font-medium">{successMessage}</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Alias de Usuario</label>
                    <input 
                        type="text" 
                        value={alias} 
                        onChange={handleAliasChange} 
                        required 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black sm:text-sm"
                        placeholder="ej. nuevo.usuario"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={handlePasswordChange} 
                        required 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black sm:text-sm"
                        placeholder="••••••••"
                    />
                </div>
                <button 
                    type="submit" 
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors"
                >
                    Crear Usuario
                </button>
            </form>
        </div>
    );
}