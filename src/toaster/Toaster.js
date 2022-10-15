import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export default function Toaster(props) {
  switch (props.props) {
    case "success":
      return toast.success("Success Notification !", {
        position: toast.POSITION.TOP_RIGHT,
      });

    case "error":
      return toast.error("Error Notification !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    case "warn":
      return toast.warn("Warning Notification !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    case "info":
      toast.info("Info Notification !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    case "dark":
      toast.dark("Dark Notification !", {
        position: toast.POSITION.TOP_RIGHT,
      });
  }
}
