

import React, { useState } from 'react';
import { Input } from './input.component';
export const Person = (props) => {
    const { myperson, updatePerson, isWorker } = props;
    const [canEdit, setCanEdit] = useState(false);

    const handleNameUpdate = (newName) => {
        setCanEdit(false);
        setTimeout(() => {
            updatePerson(myperson.id, newName, isWorker);
        }, 1000);
    };

    const style = {
        backgroundColor: '#f2dfde',
    };
    // f2dfde


    return (
        <div style={style}>
            <p>person id: {myperson.id}</p>
            <div onClick={() => setCanEdit(true)}>
                person name: {canEdit || <span>{myperson.name}</span>}
                {canEdit && (
                    <Input initialValue={myperson.name} onSave={handleNameUpdate} />
                )}
            </div>
        </div>
    );
};