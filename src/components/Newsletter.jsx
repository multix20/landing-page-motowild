import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simular envío de formulario
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsLoading(false);
    setEmail('');
    
    // Reset estado después de 3 segundos
    setTimeout(() => setIsSubmitted(false), 3000);
  };

 const styles = {
  section: {
    minHeight: '100vh',
    background: '#f0f4f8', // color blanco invierno
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.5rem',
    position: 'relative',
    overflow: 'hidden',
    color: '#333',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  },
  backgroundEffect: {
    position: 'absolute',
    inset: 0,
    opacity: 0.15,
    pointerEvents: 'none'
  },
  particle: {
    position: 'absolute',
    width: '8px',
    height: '8px',
    background: 'rgba(0, 0, 0, 0.1)',
    borderRadius: '50%',
    animation: 'float 3s ease-in-out infinite'
  },
  container: {
    position: 'relative',
    zIndex: 10,
    maxWidth: '32rem',
    width: '100%'
  },
  card: {
    backdropFilter: 'blur(20px)',
    background: '#ffffff',
    borderRadius: '1.5rem',
    padding: '3rem 2rem',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.5s ease',
    ':hover': {
      transform: 'scale(1.02)'
    }
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem'
  },
  iconContainer: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '5rem',
    height: '5rem',
    background: 'linear-gradient(45deg, #ff6600, #e85500)',
    borderRadius: '50%',
    marginBottom: '1.5rem',
    animation: 'spin 8s linear infinite'
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '1rem',
    lineHeight: '1.2'
  },
  gradient: {
    background: 'linear-gradient(45deg, #ff6600, #ffa040)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  subtitle: {
    fontSize: '1.125rem',
    color: '#555',
    lineHeight: '1.6',
    maxWidth: '28rem',
    margin: '0 auto'
  },
  formContainer: {
    marginBottom: '2rem'
  },
  input: {
    width: '100%',
    padding: '1rem 1.5rem',
    fontSize: '1.125rem',
    background: '#fff',
    border: '1px solid #ccc',
    borderRadius: '1rem',
    color: '#333',
    marginBottom: '1.5rem',
    transition: 'all 0.3s ease',
    outline: 'none',
    '::placeholder': {
      color: '#888'
    }
  },
  inputFocus: {
    borderColor: '#ff6600',
    boxShadow: '0 0 0 4px rgba(255, 102, 0, 0.2)'
  },
  button: {
    width: '100%',
    padding: '1rem 2rem',
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#fff',
    background: '#ff6600',
    borderRadius: '1rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
    outline: 'none'
  },
  buttonHover: {
    transform: 'translateY(-2px)',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.35)'
  },
  buttonDisabled: {
    opacity: 0.5,
    cursor: 'not-allowed',
    transform: 'none'
  },
  successMessage: {
    textAlign: 'center',
    padding: '1rem',
    background: 'rgba(0, 0, 0, 0.05)',
    border: '1px solid #ff6600',
    borderRadius: '0.75rem',
    marginBottom: '1.5rem',
    animation: 'pulse 2s infinite'
  },
  successText: {
    color: '#333',
    fontWeight: '500'
  },
  whatsappLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.75rem 1.5rem',
    color: '#ff6600',
    border: '1px solid #ff6600',
    borderRadius: '2rem',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    fontSize: '0.95rem'
  },
  whatsappLinkHover: {
    color: '#fff',
    background: '#ff6600'
  },
  trustIndicators: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem',
    marginTop: '2rem',
    paddingTop: '1.5rem',
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    flexWrap: 'wrap'
  },
  trustItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#333',
    fontSize: '0.875rem'
  },
  spinner: {
    width: '1.25rem',
    height: '1.25rem',
    border: '2px solid #fff',
    borderTop: '2px solid #ff6600',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite'
  },
  loadingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem'
  }
};

  return (
    <section style={styles.section}>
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
          }
          .newsletter-input:focus {
            border-color: #ff6600 !important;
            box-shadow: 0 0 0 4px rgba(255, 102, 0, 0.2) !important;
          }
          .newsletter-button:hover:not(:disabled) {
            transform: translateY(-2px) !important;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35) !important;
          }
          .newsletter-whatsapp:hover {
            color: white !important;
            background: #ff6600 !important;
          }
        `}
      </style>

      {/* Efectos de fondo */}
      <div style={styles.backgroundEffect}>
        <div style={{
          position: 'absolute',
          top: '25%',
          left: '25%',
          width: '18rem',
          height: '18rem',
          background: '#ff6600',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'pulse 4s infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '25%',
          right: '25%',
          width: '24rem',
          height: '24rem',
          background: '#e85500',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'pulse 6s infinite',
          animationDelay: '2s'
        }}></div>
      </div>

      {/* Partículas flotantes */}
      <div style={styles.backgroundEffect}>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            style={{
              ...styles.particle,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div style={styles.container}>
        <div style={styles.card}>
          
          {/* Header */}
          <div style={styles.header}>
            <div style={styles.iconContainer}>
              <svg style={{width: '2.5rem', height: '2.5rem', fill: 'white'}} viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
            </div>
            
            <h2 style={styles.title}>
              ¡Únete a la comunidad{' '}
              <span style={styles.gradient}>MotoWild!</span>
            </h2>
            
            <p style={styles.subtitle}>
              Recibe las próximas salidas, descuentos exclusivos y consejos de viaje directo en tu correo.
            </p>
          </div>

          {/* Formulario */}
          <div style={styles.formContainer}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
              required
              className="newsletter-input"
              style={styles.input}
            />
            
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="newsletter-button"
              style={{
                ...styles.button,
                ...(isLoading ? styles.buttonDisabled : {})
              }}
            >
              {isLoading ? (
                <div style={styles.loadingContainer}>
                  <div style={styles.spinner}></div>
                  <span>Suscribiendo...</span>
                </div>
              ) : isSubmitted ? (
                <div style={styles.loadingContainer}>
                  <svg style={{width: '1.25rem', height: '1.25rem', fill: 'currentColor'}} viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>¡Suscrito con éxito!</span>
                </div>
              ) : (
                'Suscribirme Ahora'
              )}
            </button>
          </div>

          {/* Mensaje de confirmación */}
          {isSubmitted && (
            <div style={styles.successMessage}>
              <p style={styles.successText}>
                ¡Genial! Te has unido a nuestra comunidad. Revisa tu correo para confirmar la suscripción.
              </p>
            </div>
          )}

          {/* WhatsApp Link */}
          <div style={{textAlign: 'center', marginBottom: '2rem'}}>
            <a
              href="https://wa.me/56951569704"
              target="_blank"
              rel="noopener noreferrer"
              className="newsletter-whatsapp"
              style={styles.whatsappLink}
            >
              <svg style={{width: '1.5rem', height: '1.5rem', fill: '#22c55e'}} viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span>¿Tienes dudas? Escríbenos por WhatsApp</span>
            </a>
          </div>

          {/* Indicadores de confianza */}
          <div style={styles.trustIndicators}>
            <div style={styles.trustItem}>
              <svg style={{width: '1.25rem', height: '1.25rem', fill: 'currentColor'}} viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
              </svg>
              <span>100% Seguro</span>
            </div>
            <div style={styles.trustItem}>
              <svg style={{width: '1.25rem', height: '1.25rem', fill: 'currentColor'}} viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <span>Sin Spam</span>
            </div>
            <div style={styles.trustItem}>
              <svg style={{width: '1.25rem', height: '1.25rem', fill: 'currentColor'}} viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
              </svg>
              <span>Fácil cancelación</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
