import React from 'react';
import Header from './header/Header';
import Canvas from './canvas/Canvas';

function Dashboard() {
    return (
        <div className="dashboard">
            <Header />
            <Canvas />
        </div>
    );
}

export default Dashboard;
