import React from 'react';

import { 
    Container, HashTagIcon, Title, Separator, Description
} from './styles'

//exportando com TypeScript
const ChannelInfo: React.FC = () => {
    return(
        <Container>
            <HashTagIcon />
            <Title> Geral </Title>
            <Separator />
            <Description> Canal de conversas gerais</Description>
        </Container>
    )
}

export default ChannelInfo;















/*
//exportando com JS
function Layout(){
    return(
        <div></div>
    )
}

export default Layout;
*/