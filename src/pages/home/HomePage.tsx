import styles from "./HomePage.module.scss";
import {useCreation, useUpdate} from "ahooks";
import {HomeBloc} from "./HomeBloc";
import {useDidMount} from "js-react/dist/hooks/useDidMount";

export function HomePage(): JSX.Element {
  const foreUpdate = useUpdate();
  const bloc = useCreation(() => new HomeBloc(), []);
  useDidMount(async () => {
    await bloc.load();
  });

  return <div className={styles.homePage}></div>;
}
