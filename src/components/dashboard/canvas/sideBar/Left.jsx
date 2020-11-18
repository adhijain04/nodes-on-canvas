import React from 'react'

function Left({ renderNodeHandler, menuDisabled }) {
    return (
        <div className='left-container'>
            <div className='menu-item' onClick={() => renderNodeHandler("Speak")}>
                <i className="fas fa-comment menu-icon"></i>
                <p className='menu-name'>Speak</p>
            </div>
            <div className='menu-item' onClick={() => renderNodeHandler("Choice")}>
                <i className="fas fa-project-diagram menu-icon"></i>
                <p className='menu-name'>Choice</p>
            </div>
            <div className='menu-item' onClick={() => renderNodeHandler("DTMF")}>
                <i className="fas fa-calculator menu-icon"></i>
                <p className='menu-name'>DTMF</p>
            </div>
            <div className='menu-item' onClick={() => renderNodeHandler("Record")}>
                <i className="fas fa-microphone menu-icon"></i>
                <p className='menu-name'>Record</p>
            </div>
            <div className='menu-item' onClick={() => renderNodeHandler("API")}>
                <i className="fas fa-globe menu-icon"></i>
                <p className='menu-name'>API</p>
            </div>
            <div className='menu-item' onClick={() => renderNodeHandler("SMS")}>
                <i className="fas fa-envelope menu-icon"></i>
                <p className='menu-name'>SMS</p>
            </div>
            <div className='menu-item' onClick={() => renderNodeHandler("Flow")}>
                <i className="fab fa-uncharted menu-icon"></i>
                <p className='menu-name'>Flow</p>
            </div>
            <div className='menu-item' onClick={() => renderNodeHandler("Transfer")}>
                <i className="fas fa-people-arrows menu-icon"></i>
                <p className='menu-name'>Transfer</p>
            </div>
            <div className={menuDisabled ? 'menu-item disabled' : "menu-item"} onClick={() => renderNodeHandler("HangUp")} disabled={menuDisabled}>
                <i className="fas fa-phone-slash menu-icon"></i>
                <p className='menu-name'>HangUp</p>
            </div>
        </div>
    )
}

export default Left
