void (async function seed() {
  console.info('Seeding Database...')

  try {
    await import('./domains')
    await import('./tags')
    await import('./projects')
    await import('./experiences')

    console.info('Database seeding complete!')
  } catch (error) {
    console.error('Error during seeding with projects:', error)
  }
})()
