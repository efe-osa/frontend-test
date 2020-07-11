const { pathGet } = require("../utils")

/**

@jest-environment node
*/
describe('Get query\'s path', () => {
    it('path exists', () => {
        const a = {
            user: {
                id: 1,
                name: {
                    firstName: "James",
                    lastName: "Ibori"
                },
                location: {
                    city: "Ikoyi",
                    state: "Lagos",
                    address: "One expensive house like that"
                }
            }
        }

        expect(
            pathGet(a, 'One expensive house like that')).toEqual("a.user.location.address")
        expect(
            pathGet(a, 'James')

        ).toEqual("a.user.name.firstName")
    })
})