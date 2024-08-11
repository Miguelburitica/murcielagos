import { BatGroup, ExclusiveCharacteristic, GradualCharacteristic } from "./BatGroups";

export interface GetFilteredBatGroups {
  (characteristics: ExclusiveCharacteristic[] | GradualCharacteristic[]): BatGroup[]
}