import React from 'react';

import { Grid } from './styles'
import ServerList from '../ServerList'
import ServerName from '../ServerName'
import ChannelInfo from '../ChannelInfo'
import ChannelList from '../ChannelList'

//exportando com TypeScript
const Layout: React.FC = () => {
    return(
        <Grid>
            <ServerList />
            <ServerName />
            <ChannelInfo />
            <ChannelList />
        </Grid>
    )
}

export default Layout;















/*
//exportando com JS
function Layout(){
    return(
        <div></div>
    )
}

export default Layout;
*/