import { ItemListContainer } from "../../components/ItemListContainer";
import { NavBar } from "../../components/NavBar";

export const HomeContainer = () => {
    const card = {greetins:'Aqui va a ir un Card'}
    return (
        <>  
            <NavBar/>
            <section>
            <ItemListContainer cardData={card} stock={5} />
            <ItemListContainer cardData={card} stock={8} />
            <ItemListContainer cardData={card}/>
            <ItemListContainer cardData={card}/>
            </section>
        </>
    )
}