import { createContext } from 'react';
import { User } from '../interfaces/user.interface';

export type userContext = {
    user?: User,
    setUser: Function,
}

export const UserContext = createContext<userContext>({});

