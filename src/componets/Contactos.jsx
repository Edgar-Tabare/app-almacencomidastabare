import { useForm } from "react-hook-form";

const Contactos = () => {
  const { register, handleSubmit } = useForm();

  const enviar = (formulario) => {
    console.log(formulario);
  };

  return (
    <div className="container">
      <h1 className="main-title">Contacto</h1>
      <form className="formulario" onSubmit={handleSubmit(enviar)}>
       
        <input type="name" placeholder="Nombre"{...register("name")} />
        <input type="phone" placeholder="Telefono"{...register("phone")} />
        <input type="email" placeholder="email"{...register("email")} />

        <button className="enviar" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contactos;
