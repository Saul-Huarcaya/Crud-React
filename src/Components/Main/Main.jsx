import Table from "../Table/Table";
import Add from "../Add/Add";
import Modal from "../Modal/Modal";
import { useState } from "react";

function Main(){
    const [ModalAdd,setModalAdd] = useState(false);

    const AddUser = () =>{
        setModalAdd(true);
    }

    return <div className="container">
        <h1 className="title">CRUD useContext +  useReducer + useForm</h1>

        <button className="btn-Add" onClick={AddUser}>Registrar</button>
            {ModalAdd && 
            <Modal ModalClose={setModalAdd}> 
                <Add/>
            </Modal>
        }

        <Table/>
    </div>
}
export default Main;

