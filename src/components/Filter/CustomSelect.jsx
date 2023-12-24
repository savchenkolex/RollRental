import { useState } from "react";
import css from "./Filter.module.css";
import { useField } from "formik";

export default function CustomSelect({ label, options, ...props }) {
  const [field, meta] = useField(props);
  const [isOpen, setIsOpen] = useState(false);

  const handleOption = (value) => {
    field.onChange({ target: { name: props.name, value } });
    console.log("clap");
    setIsOpen(prev => !prev);
  };

  return (
    <>
      <div className={css.customSelectContainer}>
        <label>
          <p>{label}</p>
        <div
          className={`custom-select ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="selected-option">{field.value ? field.value : "select"}</div>
          {isOpen && (
            <ul className="options-list">
              {options.map((option) => (
                <li key={option} onClick={() => handleOption(option)}>
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
        </label>
      </div>
    </>
  );
}
