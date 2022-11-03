export type RoutePlayersParams = {
  group: string
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      groups: undefined
      newGroup: undefined
      players: RoutePlayersParams
    }
  }
}
