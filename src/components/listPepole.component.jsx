import { Person } from "./person.component";
import { workers as _workers } from "../data/workers";
import { customers as _customers } from "../data/customers";
import { useState } from 'react';

export const ListPepole = (props) => {
    const { list } = props;
    
    const [workers, setWorkers] = useState(_workers);
    const [customers, setCustomers] = useState(_customers);

    const updatePerson = (id, name, isWorker) => {
        if (isWorker) {
            const worker = workers.find(w => w.id === id);
            worker.name = name;
            setWorkers([...workers]);
        } else {
            const customer = customers.find(c => c.id === id);
            customer.name = name;
            setCustomers([...customers]);
        }
    }


   
    return <div>
        <ul>
            {
                list.map(pepole => <li key={pepole.id}><Person myperson={pepole} updatePerson={updatePerson} isWorker={list === _workers}/></li>)
            }
        </ul>
    </div>
}
