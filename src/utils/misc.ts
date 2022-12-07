export const isEnvBrowser = (): boolean => !(window as any).invokeNative;

/**
 *
 * @param titulo
 * @param text
 * @param kind "warning"| "error" | "info" | "info-square" | "success" | "warning-alt"
 * @param where
 * @param cb
 */
