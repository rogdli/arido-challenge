import { useState, useEffect } from 'react';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';
import { api } from './services/api'; 

function App() {
    const [users, setUsers] = useState([]);
    const [currentView, setCurrentView] = useState('menu');

    // orquestador solo llama al servicio, no sabe de URLs ni de JSONs
    const fetchUsers = async () => {
        try {
            const data = await api.getAllUsers();
            setUsers(data);
        } catch (error) {
            console.error('Error al conectar con la API:', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 font-sans selection:bg-black selection:text-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center">
                
                <header className="mb-10 text-center">
                    <h1 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
                        Control de Accesos
                    </h1>
                    <p className="mt-2 text-sm text-gray-500 uppercase tracking-widest font-semibold">
                        Módulo de Manufactura
                    </p>
                </header>
                
                <main className="w-full flex justify-center">
                    
                    {currentView === 'menu' && (
                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm w-full max-w-md">
                            <h2 className="text-xl font-bold mb-6 text-gray-900 text-center">Menú Principal</h2>
                            <div className="space-y-4">
                                <button 
                                    onClick={() => setCurrentView('register')}
                                    className="w-full text-left px-5 py-4 border border-gray-300 rounded-md hover:bg-gray-50 hover:border-black transition-colors font-medium flex justify-between items-center group"
                                >
                                    <span>1. Registrar usuario</span>
                                    <span className="text-gray-400 group-hover:text-black transition-colors">→</span>
                                </button>
                                <button 
                                    onClick={() => setCurrentView('list')}
                                    className="w-full text-left px-5 py-4 border border-gray-300 rounded-md hover:bg-gray-50 hover:border-black transition-colors font-medium flex justify-between items-center group"
                                >
                                    <span>2. Ver lista de usuarios</span>
                                    <span className="text-gray-400 group-hover:text-black transition-colors">→</span>
                                </button>
                            </div>
                        </div>
                    )}

                    {currentView === 'register' && (
                        <div className="w-full max-w-md">
                            <button 
                                onClick={() => setCurrentView('menu')}
                                className="mb-6 text-sm font-semibold text-gray-500 hover:text-black flex items-center transition-colors"
                            >
                                ← Volver al menú
                            </button>
                            <UserForm onUserCreated={fetchUsers} />
                        </div>
                    )}

                    {currentView === 'list' && (
                        <div className="w-full max-w-4xl">
                            <button 
                                onClick={() => setCurrentView('menu')}
                                className="mb-6 text-sm font-semibold text-gray-500 hover:text-black flex items-center transition-colors"
                            >
                                ← Volver al menú
                            </button>
                            <UserTable users={users} />
                        </div>
                    )}
                </main>
                
            </div>
        </div>
    );
}

export default App;