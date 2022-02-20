export function getApps() {
  const resp = await fetch('./data.js');
  const data = resp.json();
  return data;
}
