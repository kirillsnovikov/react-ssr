// type Error = string

type Errors = {
  [name: string]: string;
};

export const systemErrors: Errors = {
  portInUse: 'Port is already in use.',
  portRequiresPrivilege: 'Port requires elevated privileges.',
};
