export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="logo__mark logo__mark--sm" aria-hidden />
          <span>GK Estate</span>
        </div>
        <p className="footer__copy">
          © {new Date().getFullYear()} GK Estate. 데모 목적의 정적 페이지입니다.
        </p>
        <a className="footer__link" href="mailto:hello@example.com">
          문의 hello@example.com
        </a>
      </div>
    </footer>
  )
}
