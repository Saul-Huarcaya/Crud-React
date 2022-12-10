import "./Table.css";
import { useState,useContext } from "react";
import { Context } from "../../Context/Context";
import Modal from "../Modal/Modal";
import DeleteUser from "../Delete/Delete";
import UpdateUser from "../Update/Update";
import { BsPenFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";


function Table(){

    const {data} = useContext(Context);
    const [identificador,setIdentificador] = useState();
    const [ModalDelete,setModalDelete] = useState(false);
    const [ModalUpdate,setModalUpdate] = useState(false);

    const OpenDelete = (id) =>{
        setIdentificador(id);
        setModalDelete(true);
    }

    const OpenUpdate = (id) =>{
        setIdentificador(id);
        setModalUpdate(true);
    }

    return(
        <>
        
        <div className="container-table">
            <table>
                <thead>
                    <tr>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Edad</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (data.length === 0) ? <tr>
                                <td colSpan={4}>Sin datos</td>
                            </tr> :
                        data.map((user)=>
                        <tr key={user.id}>
                                <td>{user.nombre}</td>
                                <td>{user.apellido}</td>
                                <td>{user.edad}</td>
                                <td>
                                    <BsPenFill className="btn update" onClick={() => OpenUpdate(user.id)}/>
                                    <AiFillDelete className="btn delete"  onClick={() => OpenDelete(user.id)}/>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>  
            {ModalDelete 
            &&<Modal ModalClose={setModalDelete}>
                <DeleteUser id={identificador} ModalClose={setModalDelete}/>
            </Modal>}

            {ModalUpdate 
            &&<Modal ModalClose={setModalUpdate}>
                <UpdateUser id={identificador} ModalClose={setModalUpdate}/>
            </Modal>}
            </div>
        </>
    )
}

export default Table;