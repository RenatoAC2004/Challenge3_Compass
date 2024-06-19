export interface GenericAction<T = string, P = unknown> {
  type: T
  payload: P
}
