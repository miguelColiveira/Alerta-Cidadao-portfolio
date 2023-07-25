import { useContext } from "react"
import { UserContext } from "../../Context/userContext"
import { StyledUserCard } from "./style"


export const UserCard = () => {

    const {user} = useContext(UserContext)

  return (
    <StyledUserCard>
      <h1> Bem vindo, { user?.name } !</h1>
      <p> Localidade: {user?.cidade} / {user?.estado} </p>
      <p> Email para contato: {user?.email} </p>
      
    </StyledUserCard>
  )
}


