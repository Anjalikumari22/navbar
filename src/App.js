// src/App.js
import React from 'react';
import Navbar from './Navbar';

function App() {
    return (
        <div>
            <Navbar />
            {/* Other components can go here */}
            <div className="p-4">
                <h1 className="text-2xl"></h1>
            </div>
        </div>
    );
}

export default App;

