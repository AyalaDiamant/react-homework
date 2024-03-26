

import React, { useState } from 'react';

export const Input = ({ initialValue, onSave }) => {
    const [name, setName] = useState(initialValue);

    const handleSave = () => {
        onSave(name);
    };

    return (
        <input
            value={name}
            autoFocus
            onChange={(e) => setName(e.target.value)}
            onBlur={handleSave}
        />
    );
};
