import React, { forwardRef, InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

// Estende os atributos nativos do input (ex: onChange, value, required)
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string; // Torna o id obrigatório para garantir acessibilidade (htmlFor)
}

// O forwardRef recebe o tipo do elemento HTML e as Props
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, type = 'text', ...props }, ref) => {
    return (
      <div className={styles.inputGroup}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <input
          id={id}
          type={type}
          ref={ref} // Ref anexada ao input nativo
          className={styles.input}
          {...props} // Repassa value, onChange, etc.
        />
      </div>
    );
  }
);

// Boa prática ao usar forwardRef
Input.displayName = 'Input';