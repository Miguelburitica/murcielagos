import { computed, onMounted, ref } from "vue";
import { BatGroupRepository } from "../domain/RepositoryBatGroups";
import { BatGroup, CHARACTERISTIC_KEY, LEVEL_PER_CHARACTERISTIC } from "../domain/BatGroups";

export const useQuerierBatGroup = (BatGroupRepository: BatGroupRepository) => {
  const filters = ref<Map<string, BatGroupFilter>>(new Map())
  const batGroupInitialList = ref<BatGroup[]>([])
  
  const batGroupList = computed<BatGroup[]>(() => {
    let batGroupList = batGroupInitialList.value
    
    if (filters.value) {
      batGroupList = applyFilters(batGroupList)
    }
    
    return batGroupList
  })  

  const initFilters = (batGroupArray: BatGroup[]) => {
    const filters: Map<CHARACTERISTIC_KEY, BatGroupFilter> = new Map()

    for (const batGroupElement of batGroupArray) {
      if (!batGroupElement.characteristics.length) continue
      
      for (const characteristic of batGroupElement.characteristics) {
        if (filters.get(characteristic.key)) continue

        filters.set(characteristic.key, {
          characteristicName: characteristic.name,
          isActive: false,
          level: characteristic.level,
          value: false,
        })
      }
    }

    return filters
  }
  const applyFilters = (batGroupArray: BatGroup[]) => {
    for (const filter of filters.value?.values()) {
      if (!filter.isActive) continue


    }
    
    return batGroupArray
  }

  onMounted(async () => {
    batGroupInitialList.value = await BatGroupRepository.getBatGroups()
    filters.value = initFilters(batGroupList.value)
  })
  
  return {
    filters,
    batGroupList
  }
}

export interface BatGroupFilter {
  characteristicName: string
  isActive: boolean
  level: LEVEL_PER_CHARACTERISTIC
  value: boolean // for now we will just use exclusive characteristics,
}
