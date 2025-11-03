import { test, expect } from '@playwright/test'

interface User {
    id: number
    name: string
    email: string
}

test.describe('User API Tests', () => {
    const BASE_URL = 'https://api.example.com'

    test('should create a new user', { tag: 'postAPI_example' }, async ({ request }) => {
        const newUser = { name: 'Jane Doe', email: 'jane.doe@example.com' }
        const response = await request.post(`${BASE_URL}/users`, {
            data: newUser,
            headers: { 'Content-Type': 'application/json' }
        })

        expect(response.status()).toBe(201)
        const createdUser: User = await response.json()
        expect(createdUser.name).toBe(newUser.name)
        expect(createdUser.email).toBe(newUser.email)
    })

    test('should get a specific user', { tag: 'getAPI_example' }, async ({ request }) => {
        const userId = 123 // Assuming a user with this ID exists
        const response = await request.get(`${BASE_URL}/users/${userId}`)

        expect(response.status()).toBe(200)
        const user: User = await response.json()
        expect(user.id).toBe(userId)
    })
})