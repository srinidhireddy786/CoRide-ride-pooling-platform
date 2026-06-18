import React, { useState, useEffect } from 'react';

const AUTO_FACTS = [
  "The average car has over 30,000 unique parts.",
  "Volvo invented the 3-point seatbelt in 1959 and shared the patent for free to save lives.",
  "The first electric vehicle was built in 1832.",
  "Bajaj introduced the first auto-rickshaw to India in 1959.",
  "An F1 car can theoretically drive upside down on a ceiling.",
  "About 65% of all Rolls-Royce cars ever built are still running.",
  "We spend about 99 days of our lives waiting at red lights.",
  "The highest car mileage record is over 3.2 million miles.",
  "Recycling cars saves 85 million barrels of oil annually.",
  "Over 100 million vehicles are manufactured globally each year.",
  "The first US car race in 1895 was won at just 11.2 mph."
];


const LoadingFacts = ({ fullPage = false }) => {
  const [fact, setFact] = useState('');

  useEffect(() => {
    // Pick a random fact
    const randomIndex = Math.floor(Math.random() * AUTO_FACTS.length);
    setFact(AUTO_FACTS[randomIndex]);
  }, []);

  const containerStyle = fullPage ? styles.fullPageContainer : styles.sectionContainer;

  return (
    <div style={containerStyle} className="animate-fade">
      <div style={styles.spinner} />
      <div style={styles.factBox}>
        <span style={styles.factLabel}>Did you know?</span>
        <p style={styles.factText}>{fact}</p>
      </div>
    </div>
  );
};

const styles = {
  fullPageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    width: '100vw',
    backgroundColor: 'var(--bg-primary)',
    padding: '2rem',
    gap: '2rem',
    textAlign: 'center',
  },
  sectionContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '6rem 2rem',
    gap: '1.5rem',
    width: '100%',
    textAlign: 'center',
  },
  spinner: {
    width: '44px',
    height: '44px',
    border: '4px solid var(--bg-tertiary)',
    borderTopColor: 'var(--accent-primary)',
    borderRadius: '50%',
    animation: 'spin 1.2s linear infinite',
  },
  factBox: {
    maxWidth: '460px',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
    padding: '1rem 1.5rem',
    borderRadius: 'var(--radius-md)',
    backgroundColor: 'var(--card-inner-bg)',
    border: '1px solid var(--card-inner-border)',
    animation: 'slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  factLabel: {
    fontSize: '0.75rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: 'var(--accent-primary)',
    letterSpacing: '0.05em',
  },
  factText: {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.5',
    margin: 0,
  }
};

export default LoadingFacts;
