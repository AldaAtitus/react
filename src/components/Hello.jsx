function UserLogged({username}) {
    return ( <div>Seja bem-vindo, {username}!</div> )
}
function DoLogin({setUserState}) {
    return ( <div onClick={() => setUserState(true)}>Clique aqui e faça login</div> )
}
export function Hello({ isLogged = false, username = "Aldacir", setUserState }) {
    return isLogged ? <UserLogged username={username} /> : <DoLogin setUserState={setUserState} />;
}