import MaterialTable from 'material-table';
import React, { useEffect, useState } from 'react'
import { forwardRef } from 'react';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { usersAPI } from "../api/api";
import { User } from "../common/types";
import { UserTable } from './UserTable';

export const MainPage = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        usersAPI.getUsersList().then((response: any) => {
            const users: User[] = response.map((user: any) => ({
                name: user.name,
                email: user.email,
                city: user.address.city,
                company: user.company.name
            }))

            setUsers(users);
        })

    }, []);

    return (
        <div>
            {users ?
                <UserTable data={users} /> :
                <span>Loading...</span>
            }
        </div>
    )
}