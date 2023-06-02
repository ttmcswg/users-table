import MaterialTable from 'material-table';
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

export const UserTable = (props: any) => {
    return (
        <div>
            <MaterialTable
                icons={{
                    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
                    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
                    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
                    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
                    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
                    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
                    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
                    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
                    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
                    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
                }}
                columns={[
                    { title: 'Name', field: 'name' },
                    { title: 'Email', field: 'email' },
                    { title: 'City', field: 'city' },
                    { title: 'Company name', field: 'company' },
                ]}
                options={{
                    showTitle: false
                }}
                data={props.data}
            ></MaterialTable>
        </div>
    )
}