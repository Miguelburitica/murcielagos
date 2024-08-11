import jsonInfo from '../../public/data.json'
import { BatGroup, CHARACTERISTIC_KEY, ExclusiveCharacteristic, LEVEL_PER_CHARACTERISTIC } from "../domain/BatGroups";

class JsonRepository {
  getBatGroups: () => BatGroup[]
  
  constructor() {
    this.getBatGroups = () => {
      const mappedGroups = this.getMappedGroups(jsonInfo)

      return mappedGroups
    }
  }

  getMappedGroups (jsonGroupsArray: RawGroup[]): BatGroup[] {
    return jsonGroupsArray.map(rawGroup => {
      return {
        characteristics: this.getCharacteristicsFromRaw(rawGroup),
        commonName: rawGroup?.nombre_natural ?? '',
        scientificName: rawGroup?.nombre_clase ?? ''
      }
    })
  }

  getCharacteristicsFromRaw (rawGroup: RawGroup): ExclusiveCharacteristic[] {
    const characteristicsList: ExclusiveCharacteristic[] = []

    if (typeof rawGroup.tiene_cola_corta === 'boolean') characteristicsList.push({
      key: CHARACTERISTIC_KEY.withShortTail,
      level: LEVEL_PER_CHARACTERISTIC.withShortTail,
      name: 'Tiene cola corta',
      haveIt: rawGroup.tiene_cola_corta
    })

    if (typeof rawGroup.tiene_hoja_nasal === 'boolean') characteristicsList.push({
      key: CHARACTERISTIC_KEY.withNoseLeaf,
      level: LEVEL_PER_CHARACTERISTIC.withNoseLeaf,
      name: 'Tiene hoja nasal',
      haveIt: rawGroup.tiene_hoja_nasal
    })

    if (typeof rawGroup.tiene_discos_de_succion === 'boolean') characteristicsList.push({
      key: CHARACTERISTIC_KEY.withSuckerDiscs,
      level: LEVEL_PER_CHARACTERISTIC.withSuckerDiscs,
      name: 'Tiene discos de succión',
      haveIt: rawGroup.tiene_discos_de_succion
    })

    if (typeof rawGroup.tiene_rostro_con_pelos === 'boolean') characteristicsList.push({
      key: CHARACTERISTIC_KEY.withHairlessFace,
      level: LEVEL_PER_CHARACTERISTIC.withHairlessFace,
      name: 'Tiene cara desnuda',
      haveIt: !rawGroup.tiene_rostro_con_pelos
    })

    if (typeof rawGroup.tiene_labio_superior_endido === 'boolean') characteristicsList.push({
      key: CHARACTERISTIC_KEY.withSuperiorSplitedLip,
      level: LEVEL_PER_CHARACTERISTIC.withSuperiorSplitedLip,
      name: 'Tiene labio superior endido',
      haveIt: rawGroup.tiene_labio_superior_endido
    })

    if (typeof rawGroup.tiene_pulgar_completo === 'boolean') characteristicsList.push({
      key: CHARACTERISTIC_KEY.withShortThumb,
      level: LEVEL_PER_CHARACTERISTIC.withShortThumb,
      name: 'Tiene pulgar corto',
      haveIt: rawGroup.tiene_pulgar_completo
    })

    if (typeof rawGroup.tiene_orejas_en_embudo === 'boolean') characteristicsList.push({
      key: CHARACTERISTIC_KEY.withTrickEars,
      level: LEVEL_PER_CHARACTERISTIC.withTrickEars,
      name: 'Tiene orejas en embudo',
      haveIt: rawGroup.tiene_orejas_en_embudo
    })

    if (typeof rawGroup.tiene_cola_parcialmente_en_uropatagio === 'boolean') characteristicsList.push({
      key: CHARACTERISTIC_KEY.withTailPartiallyFreeUropatagio,
      level: LEVEL_PER_CHARACTERISTIC.withTailPartiallyFreeUropatagio,
      name: 'Tiene cola parcialmente libre del uropatagio',
      haveIt: rawGroup.tiene_cola_parcialmente_en_uropatagio
    })

    return characteristicsList
  }
}

interface RawGroup {
  "nombre_clase": string,
  "nombre_natural": string,
  "tiene_hoja_nasal": boolean,
  "tiene_discos_de_succion": boolean,
  "tiene_cola_corta": boolean,
  "tiene_rostro_con_pelos": boolean,
  "tiene_labio_superior_endido": boolean,
  "tiene_pulgar_completo": boolean,
  "tiene_orejas_en_embudo": boolean,
  "tiene_cola_parcialmente_en_uropatagio": boolean
}

export default JsonRepository
