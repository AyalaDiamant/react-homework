import { Person } from "./person.component";
import { workers as _workers, workers } from "../data/workers";
import { customers as _customers } from "../data/customers";
import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { Timer } from "./timer.component";


export const ListPepole = () => {
    const params = useParams();
    let isWorker = false;
    console.log(params);
    let list ;
    if(params.type === "Workers")
    {
        console.log("dfghjkl;")
        isWorker = true;
        list = _workers
    }
    else
    {
        list = _customers
    }

    
    
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

                // list.map(pepole => <li key={pepole.id}><Person myperson={pepole} /></li>)
            }
        </ul>
        <Outlet />
    </div>
}
