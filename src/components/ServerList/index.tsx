import React from 'react';
import ServerButton from '../ServerButton'
import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
    return(
        <Container> 
            <ServerButton isHome mentions={4} />

            <Separator />

            <ServerButton />
            <ServerButton />
            <ServerButton hasNotifications/>
            <ServerButton />
            <ServerButton mentions={8}/>
            <ServerButton />
            <ServerButton mentions={84}/>
            <ServerButton mentions={48}/>
            <ServerButton />
            <ServerButton />
            <ServerButton /> 
            <ServerButton hasNotifications/>
            <ServerButton hasNotifications mentions={5} />
        </Container>
    )
}

export default ServerList;
