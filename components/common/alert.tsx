import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export function AlertDialogDemo({
  title = "",
  content = "",
  triggerbuttonname = "",
  button = { cancel: "", confirm: "" },
  cancelCallback,
  confirmCallback,
}: {
  title?: string;
  content?: string;
  triggerbuttonname?: string;
  button?: { cancel?: string; confirm?: string };
  cancelCallback?: () => void;
  confirmCallback?: () => void;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">{triggerbuttonname}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{content}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={cancelCallback}>
            {button?.cancel}
          </AlertDialogCancel>
          <AlertDialogAction onClick={confirmCallback}>
            {button?.confirm}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
