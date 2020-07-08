import React, { useRef, useEffect } from 'react';
import ChannelMessage, { Mention } from '../ChannelMessage'

import { Container, Messages, InputWrapper, Input, InputIcon} from './styles'

//exportando com TypeScript
const ServerName: React.FC = () => {
    //referencia baixo pra cima (hook do chat)
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if(div){
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return(
        <Container>
           <Messages ref={messagesRef}>

            {Array.from(Array(15).keys()).map((n) => (   
                <ChannelMessage 
                    author="repetitivos"
                    date="30/12/2019"
                    content=" Lorem ipsum dolor sit amet."
               />
            ))}
               <ChannelMessage 
                    author="Lucas Reghini Magalhães"
                    date="01/01/2020"
                    content=" Hey buddy, h r u?"
               />

                <ChannelMessage 
                    author="cumprimentador"
                    date="01/01/2020"
                    content={
                        <>
                            <Mention> @Lucas </Mention>   como vai você?
                        </>
                    }
                    hasMention
                    isBot
               />

           </Messages>
            <InputWrapper>
                <Input type="text" placeholder="Conversar em #Lucas-server
"/>
                <InputIcon />
            </InputWrapper>
        </Container>
    )
}

export default ServerName;















/*
//exportando com JS
function Layout(){
    return(
        <div></div>
    )
}

export default Layout;
*/