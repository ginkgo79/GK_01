import { useMemo, useState } from 'react'
import { properties, type DealType } from '../data/properties'
import { PropertyCard } from './PropertyCard'

interface ListingSectionProps {
  searchQuery: string
}

const dealTypes: DealType[] = ['매매', '전세', '월세']

export function ListingSection({ searchQuery }: ListingSectionProps) {
  const [dealFilter, setDealFilter] = useState<DealType | '전체'>('전체')

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    return properties.filter((p) => {
      const matchDeal = dealFilter === '전체' || p.dealType === dealFilter
      if (!q) return matchDeal
      const hay = `${p.title} ${p.district} ${p.address} ${p.tag}`.toLowerCase()
      return matchDeal && hay.includes(q)
    })
  }, [searchQuery, dealFilter])

  return (
    <section className="listings" id="listings" aria-labelledby="listings-heading">
      <div className="section-head">
        <h2 id="listings-heading">추천 매물</h2>
        <p className="section-head__sub">데모 데이터입니다. 실제 서비스에서는 API와 연동할 수 있습니다.</p>
      </div>

      <div className="filters" role="group" aria-label="거래 유형 필터">
        <button
          type="button"
          className={`chip ${dealFilter === '전체' ? 'chip--active' : ''}`}
          onClick={() => setDealFilter('전체')}
        >
          전체
        </button>
        {dealTypes.map((d) => (
          <button
            key={d}
            type="button"
            className={`chip ${dealFilter === d ? 'chip--active' : ''}`}
            onClick={() => setDealFilter(d)}
          >
            {d}
          </button>
        ))}
      </div>

      <p className="listings__count" aria-live="polite">
        {filtered.length}건의 매물
      </p>

      <div className="grid">
        {filtered.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="empty">조건에 맞는 매물이 없습니다. 검색어나 필터를 바꿔 보세요.</p>
      )}
    </section>
  )
}
