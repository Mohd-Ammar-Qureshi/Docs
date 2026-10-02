import { useEffect, useMemo, useState } from "react";
import './App.css'

function App() {
  const targetUrl = useMemo(() => {
    return `allinone://verify-email${window.location.search}`;
  }, []);

  const [isOpening, setIsOpening] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsOpening(false);
    }, 3500);

    window.location.replace(targetUrl);

    return () => window.clearTimeout(timer);

  }, [targetUrl]);


  const openApp = () => {
    useEffect(() => {
     const timer = window.setTimeout(() => {
      setIsOpening(true);
    }, 2000);
      window.location.href = targetUrl;
    }, [targetUrl]);
  };

  return (
    <div style={styles.page}>
      <div style={styles.backgroundGlowOne} />
      <div style={styles.backgroundGlowTwo} />
      <main style={styles.card}>
        <div style={styles.logoCircle}>
          <div style={styles.logoMark}>+</div>
        </div>

        <div style={styles.badge}>
          <span style={styles.badgeIcon}>✓</span>
          Email Verified
        </div>

        <h1 style={styles.title}>
          Welcome to <span style={styles.brand}>AllInOne</span>
        </h1>

        <p style={styles.description}>
          Your email has been successfully verified.
          <br />
          We’re opening the AllInOne app for you.
        </p>

        <div style={styles.statusBox}>
          <div style={styles.spinner} />

          <div style={styles.statusContent}>
            <strong style={styles.statusTitle}>
              {isOpening ? "Opening AllInOne..." : "Ready to open AllInOne"}
            </strong>

            <span style={styles.statusText}>
              {isOpening
                ? "Please wait a moment"
                : "Tap the button below if the app did not open automatically."}
            </span>
          </div>
        </div>

        <button type="button" onClick={openApp} style={styles.button}>
          <span>Open AllInOne</span>
          <span style={styles.arrow}>→</span>
        </button>

        <p style={styles.footerText}>
          AllInOne · Medical B2B Marketplace
        </p>
      </main>
    </div>

  );
}

const styles = {
  page: {
    minHeight: "100vh",
    width: "100%",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
    position: "relative",
    overflow: "hidden",
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    background: "#f7faff",
    color: "#0f172a",
  },

  backgroundGlowOne: {
    position: "absolute",
    width: "360px",
    height: "360px",
    borderRadius: "50%",
    background: "rgba(37, 99, 235, 0.08)",
    filter: "blur(80px)",
    top: "-120px",
    right: "-100px",
    pointerEvents: "none",
  },

  backgroundGlowTwo: {
    position: "absolute",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    background: "rgba(14, 165, 233, 0.06)",
    filter: "blur(80px)",
    bottom: "-120px",
    left: "-100px",
    pointerEvents: "none",
  },

  card: {
    width: "100%",
    maxWidth: "460px",
    boxSizing: "border-box",
    position: "relative",
    zIndex: 1,
    background: "rgba(255, 255, 255, 0.96)",
    border: "1px solid rgba(226, 232, 240, 0.9)",
    borderRadius: "28px",
    padding: "42px 30px 28px",
    textAlign: "center",
    boxShadow: "0 24px 70px rgba(15, 23, 42, 0.10)",
  },

  logoCircle: {
    width: "68px",
    height: "68px",
    margin: "0 auto 18px",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#2563eb",
    boxShadow: "0 10px 28px rgba(37, 99, 235, 0.25)",
  },

  logoMark: {
    color: "#ffffff",
    fontSize: "65px",
    fontWeight: 900,
    letterSpacing: "-1px",
    paddingBottom: '15px'
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "7px",
    padding: "7px 12px",
    borderRadius: "999px",
    background: "#eff6ff",
    color: "#2563eb",
    fontSize: "13px",
    fontWeight: 700,
    marginBottom: "18px",
  },

  badgeIcon: {
    width: "18px",
    height: "18px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    background: "#2563eb",
    color: "#ffffff",
    fontSize: "11px",
    fontWeight: 800,
  },

  title: {
    margin: "0",
    fontSize: "30px",
    lineHeight: 1.2,
    letterSpacing: "-0.8px",
    fontWeight: 800,
    color: "#0f172a",
  },

  brand: {
    color: "#2563eb",
  },

  description: {
    margin: "14px auto 26px",
    maxWidth: "350px",
    fontSize: "15px",
    lineHeight: 1.65,
    color: "#64748b",
  },

  statusBox: {
    display: "flex",
    alignItems: "center",
    gap: "13px",
    textAlign: "left",
    padding: "15px",
    marginBottom: "18px",
    borderRadius: "16px",
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
  },

  spinner: {
    width: "24px",
    height: "24px",
    flexShrink: 0,
    borderRadius: "50%",
    border: "3px solid #dbeafe",
    borderTopColor: "#2563eb",
    animation: "allinone-spin 0.9s linear infinite",
  },

  statusContent: {
    display: "flex",
    flexDirection: "column",
    gap: "3px",
  },

  statusTitle: {
    fontSize: "14px",
    fontWeight: 700,
    color: "#334155",
  },

  statusText: {
    fontSize: "12px",
    lineHeight: 1.45,
    color: "#94a3b8",
  },

  button: {
    width: "100%",
    minHeight: "50px",
    border: "0",
    borderRadius: "14px",
    padding: "0 18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    cursor: "pointer",
    background: "#2563eb",
    color: "#ffffff",
    fontSize: "15px",
    fontWeight: 700,
    boxShadow: "0 10px 24px rgba(37, 99, 235, 0.20)",
  },

  arrow: {
    fontSize: "20px",
    lineHeight: 1,
  },

  footerText: {
    margin: "22px 0 0",
    fontSize: "11px",
    color: "#94a3b8",
  },
};

export default App;
