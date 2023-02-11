const path = (path: string, sublink: string) => {
  return `${path}${sublink}`;
};

const PATH_PODCASTS = "/system-secutiry-ifc/podcasts";
const PATH_SECURITY = "/system-secutiry-ifc/seguranca";

export const PATH = {
  root: "/system-secutiry-ifc/",

  security: {
    root: PATH_SECURITY,
  },

  podcasts: {
    root: PATH_PODCASTS,
  },
};
