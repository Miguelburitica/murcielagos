export interface BatGroup {
  characteristics: ExclusiveCharacteristic[] | GradualCharacteristic[]
  commonName: string
  scientificName: string
}

interface AbstractCharacteristic {
  key: CHARACTERISTIC_KEY
  name: string
  level: LEVEL_PER_CHARACTERISTIC
}

export interface ExclusiveCharacteristic extends AbstractCharacteristic {
  haveIt: boolean
}

export interface GradualCharacteristic extends AbstractCharacteristic {
  values: string[]
}

export enum CHARACTERISTIC_KEY {
  withNoseLeaf = 'CON_HOJA_NASAL',
  withSuckerDiscs = 'CON_DISCOS_DE_SUCCION',
  withLongTail = 'CON_COLA_LARGA',
  withShortTail = 'CON_COLA_CORTA',
  withHairlessFace = 'CON_CARA_DESNUDA',
  withSuperiorSplitedLip = 'CON_LABIO_SUPERIOR_ENDIDO',
  withShortThumb = 'CON_PULGAR_CORTO',
  withTrickEars = 'CON_OREJAS_EMBUDO',
  withTailPartiallyFreeUropatagio = 'CON_COLA_PARCIALMENTE_LIBRE_DEL_UROPATAGIO'
}


export enum LEVEL_PER_CHARACTERISTIC {
  withNoseLeaf = 1,
  withSuckerDiscs = 2,
  withLongTail = 3,
  withShortTail = 3,
  withHairlessFace = 4,
  withSuperiorSplitedLip = 5,
  withShortThumb = 4,
  withTrickEars = 5,
  withTailPartiallyFreeUropatagio = 6
}
