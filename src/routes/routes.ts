const path = (path: string, sublink: string) => {
  return `${path}${sublink}`;
};

const PATH_PODCASTS = "/system-security-ifc/podcasts";
const PATH_SECURITY = "/system-security-ifc/seguranca";

export const PATH = {
  root: "/system-security-ifc/",

  security: {
    root: PATH_SECURITY,
  },

  podcasts: {
    root: PATH_PODCASTS,
  },
};
