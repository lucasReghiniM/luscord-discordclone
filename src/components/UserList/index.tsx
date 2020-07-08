import React from 'react';

import { Container, Role, User, Avatar} from './styles'

interface userProps{
    nickname: string;
    isBot?:boolean;
}

const UserRow: React.FC<userProps> = ({ nickname, isBot }) => {
    return(
         <User>
            <Avatar className={isBot ? 'bot' : '' }/>
            <strong> {nickname} </strong>

            {isBot && <span> bot </span>}
         </User>
    )
}


//exportando com TypeScript
const UserList: React.FC = () => {
    return(
        <Container>
            <Role>  Disponivel - 2</Role>
            <UserRow  nickname="Lucas Reghini" />
            <UserRow  nickname="Ciclano da silva pereira gomes" />

            <Role> Offline - 10</Role>
            <UserRow  nickname="Groovy DJ" isBot/>
            <UserRow  nickname="Pessoa 1" />
            <UserRow  nickname="Pessoa 2" />
            <UserRow  nickname="Pessoa 3" />
            <UserRow  nickname="Pessoa 4" />
            <UserRow  nickname="Pessoa 5" />
            <UserRow  nickname="Pessoa 6" />
            <UserRow  nickname="Pessoa 7" />
            <UserRow  nickname="Pessoa 8" />
            <UserRow  nickname="Pessoa 9" />
        </Container>
    )
}

export default UserList;















/*
//exportando com JS
function Layout(){
    return(
        <div></div>
    )
}

export default Layout;
*/