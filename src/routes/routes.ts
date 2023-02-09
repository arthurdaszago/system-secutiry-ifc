const path = (path: string, sublink: string) => {
    return `${path}${sublink}`;
}

const PATH_PODCASTS = '/podcasts'
const PATH_SECURITY = '/seguranca'

export const PATH = {
    root: '/',

    security: {
        root: PATH_SECURITY,
        dados: path(PATH_SECURITY, '/data'),
        perimetro: path(PATH_SECURITY, '/perimetro'),
        software: path(PATH_SECURITY, '/software'),
        nuvem: path(PATH_SECURITY, '/nuvem')
    },

    podcasts: {
        root: PATH_PODCASTS,
        dados: path(PATH_PODCASTS, '/data'),
        perimetro: path(PATH_PODCASTS, '/perimetro'),
        software: path(PATH_PODCASTS, '/software'),
        nuvem: path(PATH_PODCASTS, '/nuvem')
    }
}