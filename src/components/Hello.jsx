function UserLogged() {
    return ( <div>Usuário Logado</div> )
}
function DoLogin() {
    return ( <div>Clique aqui e faça login</div> )
}
export function Hello({ isLogged = false, username = "" }) {
    return isLogged ? <UserLogged /> : <DoLogin />;
}