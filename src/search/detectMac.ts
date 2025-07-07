// taken from @mdxeditor main; this should be exported
export const CAN_USE_DOM: boolean =
  typeof window !== "undefined" && typeof window.document.createElement !== "undefined";

/**
 * Used to detect if the current platform is Apple based, mostly for keyboard shortcuts.
 * @group Utils
 */
export const IS_APPLE: boolean = CAN_USE_DOM && /Mac|iPod|iPhone|iPad/.test(navigator.platform);

/**
 * Returns true if the user is pressing the control key on Windows or the meta key on Mac.
 * @group Utils
 */
export function controlOrMeta(metaKey: boolean, ctrlKey: boolean): boolean {
  if (IS_APPLE) {
    return metaKey;
  }
  return ctrlKey;
}
