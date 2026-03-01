"use client";

import { FC, useActionState, useEffect } from "react";
import styles from "./styles.module.scss";
import { loginAction } from "./loginAction";
import { Link } from "@/components/link/link";

type Props = {};

const Login: FC<Props> = (props) => {
  const [state, formAction, isPending] = useActionState(loginAction, {
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
      <h2>Вход</h2>
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
        <button disabled={isPending}>Вход</button>
      </div>

      <Link href="/register">Не зарегистрированы?</Link>
    </form>
  );
};

export default Login;
