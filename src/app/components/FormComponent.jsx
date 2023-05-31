import { useClickId } from "../hooks/useClickId";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useForm } from "../hooks/useForm";
import { useNavigate } from "react-router-dom";

const initialForm = {
  CorreoElectronico: "",
  Contrasena: "",
  Nombre: "",
  Apellidos: "",
};

export const FormComponent = (props) => {
  const { contact, contactExtra } = useContext(AuthContext);
  const validationsForm = (formState) => {
    let errors = {};
    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    if (!formState.CorreoElectronico.trim()) {
      errors.CorreoElectronico = "El campo 'Correo electronico' esta vacio.";
    } else if (!regexEmail.test(formState.CorreoElectronico.trim())) {
      errors.CorreoElectronico = "El campo 'Correo electronico' es invalido.";
    }
    if (!formState.Contrasena.trim()) {
      errors.Contrasena = "El campo 'Contraseña' esta vacio.";
    }
    if (props.formExtra) {
      if (!formState.Nombre.trim()) {
        errors.Nombre = "El campo 'Nombre' esta vacio.";
      } else if (!regexName.test(formState.Nombre.trim())) {
        errors.Nombre = "El campo 'Nombre' es invalido.";
      }
      if (!formState.Apellidos.trim()) {
        errors.Apellidos = "El campo 'Apellidos' esta vacio.";
      } else if (!regexName.test(formState.Apellidos.trim())) {
        errors.Apellidos = "El campo 'Apellidos' es invalido.";
      }
    }

    return errors;
  };
  const { onClickShow, onClickHidden, clickId } = useClickId();
  const {
    formState,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);
  const navigate = useNavigate();
  const handlePage = () => {
    navigate(`${props.to1}`);
  };

  return (
    <main className="Main Wrapper">
      <section className="Main-contact Contact">
        <h2 className="Contact-h2">{props.title}</h2>
        <form onSubmit={handleSubmit} className="Contact-form">
          {contact.map((input) => {
            const { type, label, id, name } = input;
            return (
              <div className="Contact-container" key={id}>
                <label htmlFor={label} className="Contact-label">
                  {label}
                </label>
                <input
                  type={type}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name={name}
                  value={formState[name]}
                  required
                  className="Contact-input"
                />
                {errors[name] && (
                  <p className="Contact-error">{errors[name]}</p>
                )}
              </div>
            );
          })}
          {props.formExtra &&
            contactExtra.map((input) => {
              const { type, label, id, name } = input;

              return (
                <div className="Contact-container" key={id}>
                  <label htmlFor={label} className="Contact-label">
                    {label}
                  </label>
                  <input
                    type={type}
                    name={name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={formState[name]}
                    required
                    className="Contact-input"
                  />
                  {errors[name] && (
                    <p className="Contact-error">{errors[name]}</p>
                  )}
                </div>
              );
            })}
          <div className="Contact-buttons">
            <input
              type="submit"
              value={props.btnTitle1}
              className="Btn-reutilizable"
            />
            {props.btnRegistro && (
              <>
                <div className="Contact-container--rotate"></div>
                <button
                  className="Btn-reutilizable Btn-reutilizable--white"
                  onClick={handlePage}
                >
                  {props.btnTitle2}
                </button>
              </>
            )}
          </div>
        </form>
      </section>
    </main>
  );
};
