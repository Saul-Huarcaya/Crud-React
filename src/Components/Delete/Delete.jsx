import { useContext } from "react"
import types from "../../actions/action";
import { Context } from "../../Context/Context";
import "./Delete.css";

function Delete({id,ModalClose}){
    const {dispatch,data} = useContext(Context);
    const usuario = data.find((usuario) => usuario.id == id);

    const toCloseModal = () => ModalClose(false);
    
    const handleEliminar = () =>{
        dispatch({type:types.DELETE_STUDENT,payload:usuario.id});
        toCloseModal();
    }

    return(
        <div className="aviso-delete">
            <p>¿Estas seguro de <span className="delete-user">eliminar</span>  al usuario {usuario.nombre} {usuario.apellido}?</p>
            <div className="container-button-delete">
                <button onClick={handleEliminar} className="btn-delete yes" >Si</button>
                <button onClick={toCloseModal}  className="btn-delete no">No</button>
            </div>
        </div>
    )
}

export default Delete;