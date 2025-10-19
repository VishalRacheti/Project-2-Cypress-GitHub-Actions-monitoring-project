describe('Website Monitor Test', () => {
  const urls = [
    'https://example.com',
    'https://github.com'
  ]

  urls.forEach((url) => {
    it(`should load ${url}`, () => {
      cy.visit(url)
      cy.title().should('not.be.empty')
    })
  })
})
