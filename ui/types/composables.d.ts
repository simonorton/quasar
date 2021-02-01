// Error on "quasar" import shown in IDE is normal, as we only have Components/Directives/Plugins types after the build step
// The import will work correctly at runtime
import { QDialog } from "quasar";
import { MetaOptions } from "./meta";
import { Ref, SetupContext } from "vue";
import { QVueGlobals } from "./globals";

export function useDialogPluginComponent(context: {
  emit: SetupContext["emit"];
}): {
  dialogRef: Ref<QDialog | undefined>;
  show: () => void;
  hide: () => void;
  onDialogHide: () => void;
  onDialogOk: (payload?: any) => void;
  onDialogCancel: () => void;
};

interface UseFormChildOptions {
  validate: () => boolean | Promise<boolean>;
  requiresQForm: boolean;
}

export function useFormChild(options: UseFormChildOptions): void;

export function useMeta(options: MetaOptions | (() => MetaOptions)): void;

export function useQuasar(): QVueGlobals;