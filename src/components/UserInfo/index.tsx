import React from 'react';

import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadPhoneIcon, SettingsIcon } from './styles'





//exportando com TypeScript
const UserInfo: React.FC = () => {

    
    return(
        <Container>
            <Profile>
                <Avatar  />
                <UserData>
                    <strong>Lucas Reghini </strong>
                    <span>#123456</span>
                </UserData>
            </Profile>
            <Icons>
                <MicIcon />
                <HeadPhoneIcon />
                <SettingsIcon />
            </Icons>
        </Container>
    )
}

export default UserInfo;















/*
//exportando com JS
function Layout(){
    return(
        <div></div>
    )
}

export default Layout;
*/