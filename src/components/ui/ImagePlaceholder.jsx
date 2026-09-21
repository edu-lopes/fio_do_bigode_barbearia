import { IconImage } from '../icons/Icons'

import { useState } from 'react'

export default function ImagePlaceholder({ src, alt = '', ratio = '4 / 3', label, className = '', eager = false }) {
  const [failed, setFailed] = useState(!src)

  return (
    <div className={`img-ph ${className}`} style={{ aspectRatio: ratio }}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="img-ph__fallback" role="img" aria-label={alt || 'Imagem ainda não adicionada'}>
          <IconImage size={34} />
          <span className="img-ph__label">{label || 'Adicionar imagem'}</span>
          {src && <code className="img-ph__path">{src}</code>}
        </div>
      )}
    </div>
  )
}
