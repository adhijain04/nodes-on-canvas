import React from 'react'

function Right({ selectedNode }) {
    console.log(selectedNode);
    return (
        <div className='right-sidebar-container'>
            <div className='header-section'>
                <h3>{selectedNode.name}</h3>
            </div>
            <div className='input-container'>
                <textarea placeholder='Tell VIVA what to say'/>
                <p>Press "{"{"}" to add variables.</p>
            </div>
        </div>
    )
}

export default Right
