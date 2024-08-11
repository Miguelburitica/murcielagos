import { BatGroup } from "./BatGroups";

export interface BatGroupRepository {
  getBatGroups: () => BatGroup[]
}