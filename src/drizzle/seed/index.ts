;(async function seed() {
  console.log('Seeding Database...')

  try {
    await import('./domains')
    await import('./tags')
    await import('./projects')
    await import('./experiences')

    console.log('Database seeding complete!')
  } catch (error) {
    console.error('Error during seeding with projects:', error)
  }
})()
