import Input from "./Input";
import SelectInput from "./SelectInput";
import RadioInput from "./RadioInput";

const FormPart1 = (props) => {
  const {
    handleNext,
    countries,
    getStates,
    register,
    errors,
    handleSubmit,
    correctPassword,
    correctIdNumber,
  } = props;

  return (
    <>
      <p className="form-titulo">1/2 Regístrate</p>

      
      <Input
        register={register}
        type={"number"}
        placeholder={"Cédula"}
        name={"idnumber"}
        errors={errors}
      />
      {correctIdNumber || (
        <span className="mensajeError">
          <p>Número de cédula no válido</p>
        </span>
      )}
      
      {correctPassword || (
        <span className="mensajeError">
          <p>Ingrese nuevament el número de cédula</p>
        </span>
      )}

      <SelectInput
        register={register}
        name={"course"}
        //options={courses
        options={[
          { id: "Matematicas", name: "Matematicas" },
          { id: "Lengua y Literatura", name: "Lengua y Literatura" },
          { id: "Ciencias Naturales", name: "Ciencias Naturales" },
          { id: "Estudios Sociales", name: "Estudios Sociales" },
        ]}
        title={"Módulos"}
        errors={errors}
      />

      <SelectInput
        register={register}
        name={"socialmedia"}
        options={[
          { id: "Facebook", name: "Facebook" },
          { id: "Instagram", name: "Instagram" },
          { id: "Anuncio", name: "Anuncio" },
          { id: "Twitter", name: "Twitter" },
          { id: "Volante", name: "Volante" },
          { id: "Youtube", name: "Youtube" },
        ]}
        title={"¿Como se entero?"}
        errors={errors}
      />

      <div className="d-flex gap-4 ps-4">
        <RadioInput
          type={"radio"}
          name={"gender"}
          value={"male"}
          label={"Masculino"}
          register={register}
          errors={errors}
        />
        <RadioInput
          type={"radio"}
          name={"gender"}
          value={"famale"}
          label={"Femenino"}
          register={register}
          errors={errors}
        />
      </div>
      <div className="form-boton d-flex justify-content-end ">
        <button type="button" onClick={handleSubmit(handleNext)}>
          Siguiente
        </button>
      </div>
    </>
  );
};

export default FormPart1;
