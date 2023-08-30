import { useState } from "react";

export default function useLogin(login, password) {
  const [loading, setLoading] = useState(false);

  function handleLogin(data) {
    setLoading(true);
    const { username, password } = data;

    setLoading(true);

    login(username, password)
      .then(() => {
        navigate("/home");
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  return;
}
