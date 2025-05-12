import React, { useContext, useEffect, useState } from 'react'
import { ActiveContext } from '../ActiveContext';
import './bond.css';
import { ArrowDownOutlined, DownOutlined, SettingOutlined } from '@ant-design/icons';
import { Input, Popover, Radio, Modal } from 'antd';
import Web3 from 'web3';

const Bond = () => {

    const { isActive, walletAddress } = useContext(ActiveContext);

    const parentVaultDetailStyle = {
        zIndex: isActive ? -1 : 9999,
    };

    return (
        <div className='swap-parent bif-parent parent-lsd' align='center' style={parentVaultDetailStyle}>

            

        </div>
    )
}

export default Bond