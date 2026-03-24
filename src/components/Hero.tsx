interface HeroProps {
  query: string
  onQueryChange: (v: string) => void
}

export function Hero({ query, onQueryChange }: HeroProps) {
  return (
    <section className="hero" id="search">
      <div className="hero__bg" aria-hidden />
      <div className="hero__content">
        <p className="hero__eyebrow">서울 · 수도권 프리미엄 매물</p>
        <h1 className="hero__title">
          원하는 집을,
          <br />
          <span className="hero__title-accent">빠르고 정확하게</span>
        </h1>
        <p className="hero__lead">
          지역·가격·면적을 한 번에 비교하고, 검증된 중개 정보로 결정을 돕습니다.
        </p>
        <div className="search-bar">
          <label className="visually-hidden" htmlFor="hero-search">
            매물 검색
          </label>
          <input
            id="hero-search"
            type="search"
            className="search-bar__input"
            placeholder="지역, 단지명, 지하철역으로 검색"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            autoComplete="off"
          />
          <button type="button" className="btn btn--primary search-bar__btn">
            검색
          </button>
        </div>
        <ul className="hero__stats" role="list">
          <li>
            <strong>1,240+</strong>
            <span>확인 매물</span>
          </li>
          <li>
            <strong>98%</strong>
            <span>실거래 반영</span>
          </li>
          <li>
            <strong>24h</strong>
            <span>문의 응답</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
