import {navigateAgent} from "@uikit/navigateAgent";
import {useNavigate} from "react-router-dom";
import {UnauthorizedMsg} from "@base/msg/UnauthorizedMsg";
import {eventbus} from "js-cutil/dist/base/cutil/Eventbus";

export function NavigateHolder(props: { children: any }): JSX.Element {
  const navigate = useNavigate();
  navigateAgent.setup({
    redirect(url: string): void {
      navigate(url);
    },
  });

  eventbus.on(UnauthorizedMsg, () => {
    navigate("/login");
  });

  return <>{props.children}</>;
}
