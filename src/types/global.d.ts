export {};

declare global {
  type WithLocale<T> = T & { params: { locale } };
}
