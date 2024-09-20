import React from 'react';

const Navbar = () => {
    const handleLogout = () => {
        // Handle logout logic here
        console.log('Logged out');
    };

    return (
        <nav className="flex justify-between items-center p-3 bg-blue-600 text-white">
            <div className="text-xl font-bold ml-8">Admin Name</div>
            <button 
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded mr-10" 
                onClick={handleLogout}
            >
                Logout
            </button>
        </nav>
    );
};

export default Navbar;





