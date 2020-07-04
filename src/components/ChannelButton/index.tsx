import React from 'react';

import { Container, HashtagIcon, InviteIcon, SettingsIcon} from './styles'

export interface Props{
    channelName: string;
    selected?: boolean;

}

//exportando com TypeScript
const ChannelButton: React.FC<Props> = ({
    channelName,
    selected
}) => {
    return(
        <Container className={selected? 'active' : ''}>
          <div>
            <HashtagIcon />
            <span> {channelName} </span>
          </div>
          
          <div>
            <InviteIcon />
            <SettingsIcon />
          </div>
        </Container>
    )
}

export default ChannelButton;















/*
//exportando com JS
function Layout(){
    return(
        <div></div>
    )
}

export default Layout;
*/