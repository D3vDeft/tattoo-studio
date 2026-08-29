#!/usr/bin/env node
// scripts/optimize-images.js
// Simple helper that uses sharp to resize and convert images to webp. Run locally.

const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const srcDir = path.resolve(process.cwd(), 'images')
const outDir = path.resolve(process.cwd(), 'src/assets/images')

if (!fs.existsSync(srcDir)){
  console.error('Create an images/ directory and add your images to optimize');
  process.exit(1)
}
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

const sizes = [400, 800, 1200]

fs.readdirSync(srcDir).forEach(file => {
  const ext = path.extname(file).toLowerCase()
  const name = path.basename(file, ext)
  const inPath = path.join(srcDir, file)
  sizes.forEach(sz => {
    const out = path.join(outDir, `${name}-${sz}.webp`)
    sharp(inPath).resize({ width: sz }).webp({ quality: 80 }).toFile(out)
      .then(()=>console.log('Written', out))
      .catch(err=>console.error('Error', err))
  })
})
