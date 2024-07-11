"use client";
import { Button, Checkbox, Form, Input, Card } from "antd";
import styles from "./styles.module.css";
import { authenticate } from "@/lib/actions";
import { useFormState, useFormStatus } from "react-dom";

export default function Login() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  const { pending } = useFormStatus();
  return (
    <Card
      style={{
        width: 368,
        height: 423,
      }}
      className="mr-10"
    >
      <form action={dispatch} className="pt-10 ">
        <div className={styles.loginTitle}>
          <p className={styles.loginActiveText}>账号密码登录</p>
          <p className={styles.segmentation}>|</p>
          <p>扫码登录</p>
        </div>
        {/* <input placeholder="username" className={styles.Input}  type='username'   name="username"></input>
        <input placeholder="password" className={styles.Input}  type='password'   name="password"></input> */}

        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="username"
            >
              username
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="username"
                type="username"
                name="username"
                placeholder="Enter your username"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={3}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          aria-disabled={pending}
          className={styles.loginButton}
        >
          登录
        </button>
        {errorMessage && (
          <>
            <p className="text-sm text-red-500">{"出错"}</p>
          </>
        )}
      </form>
    </Card>
  );
}
