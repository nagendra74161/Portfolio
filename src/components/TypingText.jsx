import { useEffect, useState } from 'react';

function TypingText({ phrases }) {
  const [display, setDisplay] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!phrases.length) {
      setDisplay('');
      return;
    }

    const currentText = phrases[index];
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (subIndex < currentText.length) {
          const nextSubIndex = subIndex + 1;
          setDisplay(currentText.slice(0, nextSubIndex));
          setSubIndex(nextSubIndex);
          return;
        }

        setDeleting(true);
        return;
      }

      if (subIndex > 0) {
        const nextSubIndex = subIndex - 1;
        setDisplay(currentText.slice(0, nextSubIndex));
        setSubIndex(nextSubIndex);
        return;
      }

      setDeleting(false);
      setIndex((prev) => (prev + 1) % phrases.length);
    }, deleting ? (subIndex === 0 ? 500 : 45) : subIndex === currentText.length ? 900 : 90);

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
