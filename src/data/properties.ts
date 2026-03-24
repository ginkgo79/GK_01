export type DealType = '매매' | '전세' | '월세'

export interface Property {
  id: string
  title: string
  district: string
  address: string
  dealType: DealType
  price: string
  areaM2: number
  rooms: string
  floor: string
  builtYear: number
  tag: string
  imageGradient: string
}

export const properties: Property[] = [
  {
    id: '1',
    title: '역세권 신축 아파트, 남향 거실',
    district: '강남구',
    address: '역삼동 · 도보 5분',
    dealType: '매매',
    price: '18억 5,000',
    areaM2: 84,
    rooms: '3룸 2욕',
    floor: '12/25층',
    builtYear: 2022,
    tag: '역세권',
    imageGradient: 'linear-gradient(135deg, #1e3a5f 0%, #2d5a87 50%, #4a7fb5 100%)',
  },
  {
    id: '2',
    title: '한강뷰 펜트하우스 급매',
    district: '용산구',
    address: '한남동',
    dealType: '매매',
    price: '42억',
    areaM2: 198,
    rooms: '4룸 3욕',
    floor: '35/38층',
    builtYear: 2019,
    tag: '한강뷰',
    imageGradient: 'linear-gradient(135deg, #0d1b2a 0%, #1b3a5f 40%, #778da9 100%)',
  },
  {
    id: '3',
    title: '조용한 단지 내 중층',
    district: '송파구',
    address: '잠실동',
    dealType: '전세',
    price: '6억 5,000',
    areaM2: 59,
    rooms: '2룸 1욕',
    floor: '8/20층',
    builtYear: 2015,
    tag: '단지내',
    imageGradient: 'linear-gradient(135deg, #2d6a4f 0%, #40916c 50%, #95d5b2 100%)',
  },
  {
    id: '4',
    title: '신축 오피스텔 풀옵션',
    district: '마포구',
    address: '합정동',
    dealType: '월세',
    price: '3,000 / 120',
    areaM2: 28,
    rooms: '1룸 1욕',
    floor: '7/15층',
    builtYear: 2023,
    tag: '풀옵션',
    imageGradient: 'linear-gradient(135deg, #5c4d7d 0%, #8b7ba8 50%, #c4b5e0 100%)',
  },
  {
    id: '5',
    title: '학군 우수 단지형 주택',
    district: '서초구',
    address: '반포동',
    dealType: '매매',
    price: '25억',
    areaM2: 102,
    rooms: '3룸 2욕',
    floor: '5/12층',
    builtYear: 2018,
    tag: '학군',
    imageGradient: 'linear-gradient(135deg, #6c584c 0%, #a98467 50%, #ddb892 100%)',
  },
  {
    id: '6',
    title: '공원 인접 저층 테라스',
    district: '성동구',
    address: '성수동',
    dealType: '전세',
    price: '4억 8,000',
    areaM2: 76,
    rooms: '3룸 2욕',
    floor: '2/10층',
    builtYear: 2012,
    tag: '테라스',
    imageGradient: 'linear-gradient(135deg, #264653 0%, #2a9d8f 50%, #e9c46a 100%)',
  },
]
