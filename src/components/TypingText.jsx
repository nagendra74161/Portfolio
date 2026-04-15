import { useEffect, useState } from 'react';

function TypingText({ phrases }) {
  const [display, setDisplay] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index >= phrases.length) {
      setIndex(0);
      return;
    }
    const currentText = phrases[index];
    let timeout = null;

    if (!deleting && subIndex <= currentText.length) {
      timeout = setTimeout(() => {
        setDisplay(currentText.slice(0, subIndex + 1));
        setSubIndex((prev) => prev + 1);
      }, 90);
    } else if (deleting && subIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplay(currentText.slice(0, subIndex - 1));
        setSubIndex((prev) => prev - 1);
      }, 45);
    } else if (subIndex === currentText.length) {
      timeout = setTimeout(() => setDeleting(true), 900);
    } else if (deleting && subIndex === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, phrases]);

  return (
    <span className="inline-flex items-center gap-2 text-slate-200">
      <span>{display}</span>
      <span className="h-5 w-1 animate-pulse rounded-full bg-accent" />
    </span>
  );
}

export default TypingText;
