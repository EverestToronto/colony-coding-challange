import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import AvatarWithPopover from './components/AvatarWithPopover';

const avatars = [
    { src: "./imgs/avatar1.png", label: "Avatar 1", id: 1 },
    { src: "./imgs/avatar2.png", label: "Avatar 2", id: 2 },
    { src: "./imgs/avatar3.png", label: "Avatar 3", id: 3 },
    { src: "./imgs/avatar4.png", label: "Avatar 4", id: 4 },
    { src: "./imgs/avatar5.png", label: "Avatar 5", id: 5 },
    { src: "./imgs/avatar6.png", label: "Avatar 6", id: 6 }
]

ReactDOM.render(
    <div>
        <AvatarWithPopover avatars={avatars} />
        <div className="bottom">
            <h4>Coding challenge | Frontend Dev Role</h4>
            <p>Colony.io</p>
        </div>
    </div>,
    document.getElementById('root')
);