function UserLogged({username}) {
    return ( <div>Seja bem-vindo, {username}!</div> )
}
function DoLogin() {
    return ( <div>Clique aqui e faça login</div> )
}
export function Hello({ isLogged = false, username = "Aldacir" }) {
    return isLogged ? <UserLogged username={username} /> : <DoLogin />;
}