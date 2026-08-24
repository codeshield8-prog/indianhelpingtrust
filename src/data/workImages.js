// Loads every real IHT photo from src/assets/work/<location>/ and groups by location.
// Add a photo by dropping it into the matching location folder — it appears automatically.
const files = import.meta.glob('../assets/work/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  import: 'default',
})

const byLocation = {}
for (const path in files) {
  const parts = path.split('/')
  const loc = parts[parts.length - 2] // subfolder = location key
  const stem = parts[parts.length - 1].replace(/\.[^.]+$/, '')
  ;(byLocation[loc] ||= []).push({ stem, src: files[path] })
}
for (const key in byLocation) {
  byLocation[key].sort((a, b) => a.stem.localeCompare(b.stem))
}

export default byLocation
