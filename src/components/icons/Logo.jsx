// Logotipo
export default function Logo({ size, className = '' }) {
  return (
    <img
      className={`logo ${className}`}
      src="/images/brand/logo.svg"
      alt="Fio do Bigode"
      width="1254"
      height="708"
      style={size ? { '--logo-h': size } : undefined}
      decoding="async"
    />
  )
}
