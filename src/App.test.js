import App from './App'
import { render, screen, waitFor } from '@testing-library/react'

beforeEach(() => {
    fetch.resetMocks()
})

test("recevies GitHub name from Github", async () => {
    fetch.mockResponseOnce(JSON.stringify({name: 'AugieDog'}))
    render(<App />)
    const gitHubName = await waitFor(() => screen.getByRole('heading', {level: 2 }))
    expect(gitHubName).toHaveTextContent('AugieDog')
})

test("link to github profile", async () => {
    fetch.mockResponseOnce(JSON.stringify({html_url: "https://github.com/Augiedog"}))
    render(<App />)
    const gitHubUrl = await waitFor(() => screen.getByRole('herf'))
    expect(gitHubUrl).toHaveTextContent('https://github.com/Augiedog')
})