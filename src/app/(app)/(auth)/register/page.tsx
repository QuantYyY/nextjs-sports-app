"use client";

import { FC, useActionState, useEffect } from "react";
import styles from "./styles.module.scss";
import { registerAction } from "./registerAction";

type Props = {};

const Register: FC<Props> = (props) => {
  const [state, formAction, isPending] = useActionState(registerAction, {
    error: "",
    redirectTo: undefined,
  });
  const { error, redirectTo } = state;

  useEffect(() => {
    if (redirectTo) {
      location.assign(redirectTo);
    }
  }, [redirectTo]);

  return (
    <form action={formAction}>
      <h2>Регистрация</h2>
      <div className={styles.formFields}>
        <div>
          <label htmlFor="login">Логин: </label>
          <input type="text" required name="login" />
        </div>
        <div>
          <label htmlFor="password">Пароль: </label>
          <input type="password" required name="password" />
        </div>

        {error && <div className={styles.errorText}>{error}</div>}

        <button disabled={isPending}>Регистрация</button>
      </div>
    </form>
  );
};

export default Register;
