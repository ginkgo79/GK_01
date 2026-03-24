import type { Property } from '../data/properties'

interface PropertyCardProps {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="card">
      <div
        className="card__image"
        style={{ background: property.imageGradient }}
        role="img"
        aria-label={`${property.title} 대표 이미지`}
      >
        <span className="card__tag">{property.tag}</span>
        <span className="card__deal">{property.dealType}</span>
      </div>
      <div className="card__body">
        <p className="card__district">{property.district}</p>
        <h3 className="card__title">{property.title}</h3>
        <p className="card__address">{property.address}</p>
        <p className="card__price">
          {property.dealType === '월세' ? (
            <>
              보증금 <strong>{property.price.split(' / ')[0]}</strong> · 월{' '}
              <strong>{property.price.split(' / ')[1]}</strong>
            </>
          ) : (
            <>
              {property.dealType} <strong>{property.price}</strong>
            </>
          )}
        </p>
        <dl className="card__meta">
          <div>
            <dt>전용</dt>
            <dd>{property.areaM2}㎡</dd>
          </div>
          <div>
            <dt>구조</dt>
            <dd>{property.rooms}</dd>
          </div>
          <div>
            <dt>층</dt>
            <dd>{property.floor}</dd>
          </div>
          <div>
            <dt>준공</dt>
            <dd>{property.builtYear}년</dd>
          </div>
        </dl>
      </div>
    </article>
  )
}
