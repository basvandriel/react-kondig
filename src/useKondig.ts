import useNotificationStore from "./useNotificationStore";
import { nanoid } from "nanoid";

import { Notification } from "./QueueableState";
/**
 * The ms how long a notification should last
 */
const DEFAULT_TIMEOUT_MS = 2000;

const notificate = (
  value: string,
  timeout: ReturnType<typeof setTimeout>
): Notification => ({
    id: nanoid(),
    value,
    timer: { timeout },
});

const useKondig = () => {
  const { nq, dq } = useNotificationStore();

  return (value: string, duration: number | undefined = DEFAULT_TIMEOUT_MS) => {
    const n = notificate(
      value,
      setTimeout(() => dq(value), duration)
    );
    return nq(n);
  };
};

export default useKondig;
