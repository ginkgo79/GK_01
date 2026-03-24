export function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a className="logo" href="#">
          <span className="logo__mark" aria-hidden />
          <span className="logo__text">GK Estate</span>
        </a>
        <nav className="nav" aria-label="주요 메뉴">
          <a href="#listings">매물</a>
          <a href="#search">검색</a>
          <a href="#contact">문의</a>
        </nav>
        <button type="button" className="btn btn--ghost">
          로그인
        </button>
      </div>
    </header>
  )
}
