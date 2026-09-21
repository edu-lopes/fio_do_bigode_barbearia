import { useState } from 'react'
import useMediaQuery from '../../hooks/useMediaQuery'
import Button from './Button'
import { IconUser, IconPhone, IconSliders, IconArrowRight, IconChevronLeft, IconCheck } from '../icons/Icons'
import { services } from '../../data/services'
import { site } from '../../data/site'

const STEPS = [
  { key: 'name', label: 'Nome', placeholder: 'Digite seu nome', Icon: IconUser, type: 'text', autoComplete: 'name', inputMode: 'text' },
  { key: 'phone', label: 'Telefone', placeholder: '(00) 00000-0000', Icon: IconPhone, type: 'tel', autoComplete: 'tel', inputMode: 'tel' },
  { key: 'service', label: 'Serviço', placeholder: 'Selecione o serviço', Icon: IconSliders, type: 'select' },
]

const serviceLabel = (s) => s.title.join(' ')

function maskPhone(value) {
  const d = value.replace(/\D/g, '').slice(0, 11)
  if (d.length <= 2) return d
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

export default function BookingForm() {
  const isMobile = useMediaQuery('(max-width: 899px)')
  const [values, setValues] = useState({ name: '', phone: '', service: '' })
  const [errors, setErrors] = useState({})
  const [step, setStep] = useState(0)
  const [sent, setSent] = useState(false)

  const setField = (key, raw) => {
    const value = key === 'phone' ? maskPhone(raw) : raw
    setValues((v) => ({ ...v, [key]: value }))
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const validateField = (key) => {
    const v = values[key].trim()
    if (key === 'name' && v.length < 2) return 'Informe seu nome'
    if (key === 'phone' && v.replace(/\D/g, '').length < 10) return 'Informe um telefone com DDD'
    if (key === 'service' && !v) return 'Escolha um serviço'
    return undefined
  }

  const validateAll = () => {
    const next = {}
    STEPS.forEach(({ key }) => {
      const err = validateField(key)
      if (err) next[key] = err
    })
    setErrors(next)
    return next
  }

  const submit = () => {
    const msg =
      `Olá! Quero agendar um horário na Fio do Bigode.%0A` +
      `Nome: ${encodeURIComponent(values.name)}%0A` +
      `Telefone: ${encodeURIComponent(values.phone)}%0A` +
      `Serviço: ${encodeURIComponent(values.service)}`
    window.open(`https://wa.me/${site.phoneRaw}?text=${msg}`, '_blank', 'noopener')
    setSent(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isMobile) {
      const key = STEPS[step].key
      const err = validateField(key)
      if (err) return setErrors((prev) => ({ ...prev, [key]: err }))
      if (step < STEPS.length - 1) return setStep(step + 1)
      return submit()
    }

    const found = validateAll()
    if (Object.keys(found).length === 0) submit()
  }

  const reset = () => {
    setValues({ name: '', phone: '', service: '' })
    setErrors({})
    setStep(0)
    setSent(false)
  }

  if (sent) {
    return (
      <div className="form form--done" role="status">
        <span className="form__done-icon"><IconCheck size={30} /></span>
        <h3 className="form__title">Pedido enviado!</h3>
        <p className="form__lead">Abrimos o WhatsApp com os seus dados. É só confirmar por lá que a gente te responde rapidinho.</p>
        <Button variant="ghost" type="button" onClick={reset}>Fazer outro agendamento</Button>
      </div>
    )
  }

  const isLast = step === STEPS.length - 1
  const visibleSteps = isMobile ? [STEPS[step]] : STEPS

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <span className="form__bar" aria-hidden="true" />
      <h3 className="form__title">Agende um horário!</h3>
      <p className="form__lead">
        Preencha os campos abaixo para iniciar o seu agendamento e dar um novo up no seu visual.
      </p>

      {isMobile && (
        <div className="form__progress" role="progressbar" aria-valuemin={1} aria-valuemax={STEPS.length} aria-valuenow={step + 1} aria-label="Progresso do agendamento">
          <span className="form__progress-text">Passo {step + 1} de {STEPS.length}</span>
          <span className="form__progress-track">
            <span className="form__progress-fill" style={{ width: `${((step + 1) / STEPS.length) * 100}%` }} />
          </span>
        </div>
      )}

      <div className={isMobile ? 'form__fields form__fields--step' : 'form__fields'} key={isMobile ? step : 'all'}>
        {visibleSteps.map(({ key, label, placeholder, Icon, type, autoComplete, inputMode }) => (
          <div className="field" key={key}>
            <label htmlFor={`f-${key}`} className="field__label">{label}</label>
            <div className={`field__control ${errors[key] ? 'has-error' : ''}`}>
              <span className="field__icon"><Icon size={22} /></span>

              {type === 'select' ? (
                <select
                  id={`f-${key}`}
                  value={values[key]}
                  onChange={(e) => setField(key, e.target.value)}
                  aria-invalid={!!errors[key]}
                  aria-describedby={errors[key] ? `e-${key}` : undefined}
                  className={values[key] ? '' : 'is-empty'}
                >
                  <option value="" disabled>{placeholder}</option>
                  {services.map((s) => (
                    <option key={s.id} value={serviceLabel(s)}>
                      {serviceLabel(s)} - {s.pricePrefix ? `${s.pricePrefix} ` : ''}{s.price}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={`f-${key}`}
                  type={type}
                  value={values[key]}
                  placeholder={placeholder}
                  autoComplete={autoComplete}
                  inputMode={inputMode}
                  autoFocus={isMobile && step > 0}
                  onChange={(e) => setField(key, e.target.value)}
                  aria-invalid={!!errors[key]}
                  aria-describedby={errors[key] ? `e-${key}` : undefined}
                />
              )}
            </div>
            {errors[key] && <p className="field__error" id={`e-${key}`} role="alert">{errors[key]}</p>}
          </div>
        ))}
      </div>

      <div className="form__actions">
        {isMobile && step > 0 && (
          <button type="button" className="form__back" onClick={() => setStep(step - 1)} aria-label="Voltar ao passo anterior">
            <IconChevronLeft size={22} />
          </button>
        )}
        <Button
          type="submit"
          variant="solid"
          className="form__submit"
          icon={<IconArrowRight size={24} />}
        >
          {isMobile && !isLast ? 'Continuar' : 'Bora marcar?'}
        </Button>
      </div>
    </form>
  )
}
