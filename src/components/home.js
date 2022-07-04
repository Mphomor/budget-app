
import AddItem from './additem';
import DisplayTransaction from './displayTransaction';


function Home (props) {

    return (

        <div>

        <DisplayTransaction list={props.list} />
        <AddItem  add={props.add} />


        </div>
    )
}

export default Home;