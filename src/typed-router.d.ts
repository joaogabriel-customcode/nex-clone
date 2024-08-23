/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'vue-router'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/auth/signin': RouteRecordInfo<'/auth/signin', '/auth/signin', Record<never, never>, Record<never, never>>,
    '/auth/signup': RouteRecordInfo<'/auth/signup', '/auth/signup', Record<never, never>, Record<never, never>>,
    '/public/event-sale': RouteRecordInfo<'/public/event-sale', '/public/event-sale', Record<never, never>, Record<never, never>>,
    '/public/events/category-[id]': RouteRecordInfo<'/public/events/category-[id]', '/public/events/category-:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/public/events/Intro': RouteRecordInfo<'/public/events/Intro', '/public/events/Intro', Record<never, never>, Record<never, never>>,
  }
}
