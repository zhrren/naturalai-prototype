import styles from "./LoginPage.module.scss";
import {useCreation} from "ahooks";
import {LoginBloc} from "./LoginBloc";
import {useDidMount} from "js-react/dist/hooks/useDidMount";

export function LoginPage(): JSX.Element {
  const bloc = useCreation(() => new LoginBloc(), []);
  useDidMount(async () => {
    await bloc.load();
  });

  return <div className={styles.loginPage}></div>;
}
