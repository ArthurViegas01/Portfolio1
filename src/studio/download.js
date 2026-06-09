/* Small client-side download / print / clipboard helpers. */

export function downloadFile(filename, content, mime) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}

export const downloadTxt = (slug, text) =>
  downloadFile(`${slug}.txt`, text, "text/plain;charset=utf-8");

export const downloadMd = (slug, text) =>
  downloadFile(`${slug}.md`, text, "text/markdown;charset=utf-8");

// HTML wrapped as a Word-compatible .doc (opens in Word / Google Docs).
export const downloadDoc = (slug, html) =>
  downloadFile(`${slug}.doc`, html, "application/msword");

// Open the resume HTML in a new tab and trigger the print dialog so the
// user can "Save as PDF" (selectable text, ATS-parseable, single column).
export function printHtml(html) {
  const w = window.open("", "_blank");
  if (!w) return false; // popup blocked
  w.document.open();
  w.document.write(html);
  w.document.close();
  let done = false; // run once: onload OR the fallback timer, never both
  const fire = () => {
    if (done) return;
    done = true;
    try {
      w.focus();
      w.print();
    } catch (_) {
      /* ignore */
    }
  };
  w.onload = fire;
  setTimeout(fire, 700); // fallback if onload already fired
  return true;
}

export async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (_) {
    return false;
  }
}

export async function sha256Hex(str) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
