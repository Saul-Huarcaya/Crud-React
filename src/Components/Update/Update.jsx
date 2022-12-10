import { useState } from "react";
import { useContext } from "react";
import {useForm} from "react-hook-form";
import types from "../../actions/action";
import "./Update.css";
import { Context } from "../../Context/Context";

function Update({id,ModalClose}){
    const {data,dispatch}  = useContext(Context);

    const toCloseModal = () => ModalClose(false);
    
    const {register,handleSubmit,formState:{errors},reset} = useForm();
    
    const usuario = data.find((user) => user.id === id);

    const [form,setForm] = useState(usuario);

    const handleChange = (e) =>{
        setForm({
            ...form,[e.target.name]:e.target.value
        });
    }
    const obteneDatos = (data) =>{
        if(data){
            dispatch({type:types.UPDATE_STUDENT,
                payload:form});
            reset();
            toCloseModal();
        }
    }
    
    return(
        <>
            <h2 className="title-form title-actualizar">Actualizar</h2>
            <form onSubmit={handleSubmit(obteneDatos)} className="form-update">
                <div>
                    <input 
                    type="text"
                    autoComplete="true"  
                    placeholder="Nombre" 
                    {...register("nombre",{
                        required:true,
                        maxLength:100
                    })}
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    />

                    {errors.nombre?.type === "required" && <p className="text-error">El dato es obligatorio</p>}
                    {errors.nombre?.type === "maxLength" && <p className="text-error">El nombre es demasiado largo</p>}
                </div>

                <div>
                    <input 
                    type="text" 
                    placeholder="Apellido"
                    autoComplete="true"   
                    {...register("apellido",{
                        required:true,
                        maxLength:100
                    })}
                    name="apellido" 
                    value={form.apellido}
                    onChange={handleChange}/>

                    {errors.apellido?.type == "required" && <p className="text-error">El apellido es obligatorio</p>}
                    {errors.apellido?.type === "maxLength" && <p className="text-error">El apellido es demasiado largo</p>}
                </div>

                <div>
                    <input 
                    type="number" 
                    placeholder="Edad"
                    autoComplete="true"  
                    name="edad"
                    {...register("edad",{
                        required:true,
                        min:12,
                        max:85
                    })}
                    value={form.edad}
                    onChange={handleChange}
                    />

                    {errors.edad?.type === "required" && <p className="text-error">La edad es obligatorio</p>}
                    {errors.edad?.type === "min" && <p className="text-error">La edad minima 12</p>}
                    {errors.edad?.type === "max" && <p className="text-error">La edad maxima es 85</p> }   
                </div>
                <div>
                    <input type="submit"  value="Guardar" className="form_btn_update"/>
                </div>
            </form>
        </>
    )
}
export default Update;