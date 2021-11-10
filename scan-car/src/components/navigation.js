import React from 'react';
import './navigation.css';
import logo from './logo.png';

function Navigation () {
    return (
        <header>
            <div class="navtabs">
                <div class="navtab-Logo"><img src={logo} alt="ScanCar Logo" height="40px"></img></div>
                <div class="navTabActive">Booking Management</div>
                <div class="navtab">Rental Management</div>
                <div class="navtab">Group Management</div>
            </div>
            
        </header>
    )
}

export default Navigation;