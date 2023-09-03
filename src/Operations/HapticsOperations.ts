import { Haptics, ImpactStyle } from "@capacitor/haptics";

export class HapticsOperations {
  public static hapticsImpactMedium = async () => {
    await Haptics.impact({ style: ImpactStyle.Medium });
  };

  public static hapticsImpactLight = async () => {
    await Haptics.impact({ style: ImpactStyle.Light });
  };

  public static hapticsVibrate = async () => {
    await Haptics.vibrate({
      duration: 2000,
    });
  };

  public static hapticsSelectionStart = async () => {
    await Haptics.selectionStart();
  };

  public static hapticsSelectionChanged = async () => {
    await Haptics.selectionChanged();
  };

  public static hapticsSelectionEnd = async () => {
    await Haptics.selectionEnd();
  };
}
