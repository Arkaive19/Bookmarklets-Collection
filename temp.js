javascript: (() => {
  const text = window.getSelection().toString().trim();
  if (!text) return alert("⚠️ No text selected.");
  const words = text.split(/\s+/).filter((w) => w.length > 0).length;
  const chars = text.length;
  const sents = text.split(/[.!?]+/).filter((s) => s.trim().length > 0).length;
  alert(
    `From Selected Text:\nWord Count  : ${words}\nCharacter Count: ${chars}\nSentence Count: ${sents}`
  );
})();
