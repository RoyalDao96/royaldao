import React, { useContext } from 'react';
import './Bonds.css';
import { ActiveContext } from '../ActiveContext';

const Bonds = () => {

    const { isActive } = useContext(ActiveContext);
    const parentVaultDetailStyle = {
        zIndex: isActive ? -1 : 9999,
    };

    return (
        <div className='pool-parent bond-parent' style={parentVaultDetailStyle}>
            Bonds
        </div>
    )
}

export default Bonds