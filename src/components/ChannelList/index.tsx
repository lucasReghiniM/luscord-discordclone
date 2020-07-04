import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles'
import ChannelButton from '../ChannelButton/index'

//exportando com TypeScript
const ChannelList: React.FC = () => {
    return(
        <Container>
           <Category>
               <span>Canais de texto</span>
               <AddCategoryIcon />
           </Category>

           <ChannelButton channelName="bem-vindos" / >
           <ChannelButton channelName="conversas-aleatorias" / >
           <ChannelButton channelName="comandos-do-bot" / >
           <ChannelButton channelName="avisos" / >


           {/* <Category>
               <span>Canais de voz</span>
               <AddCategoryIcon />
           </Category>

           <ChannelButton channelName="Conversas aleatorias" / >
           <ChannelButton channelName="LOL" / >
           <ChannelButton channelName="CS-GO" / >
           <ChannelButton channelName="Civilization" / > */}

        </Container>
    )
}

export default ChannelList;















/*
//exportando com JS
function Layout(){
    return(
        <div></div>
    )
}

export default Layout;
*/