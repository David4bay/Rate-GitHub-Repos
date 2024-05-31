export const notchTitle = ['Repositories', 'Sign in']

export const rerouter = (route) => {
    switch(route) {
        case 'Repositories':
            return '/repositories'

        case 'Sign in':
            return '/'

        default:
            return '/'
    }
}