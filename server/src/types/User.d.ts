export type User = {
  id: string;
  name: string;
  img?: string | undefined;
  key?: string | undefined;
} & (
  | {
    role: "USER";
    canViewKeys: string[];
  }
  | {
    role: "ADMIN";
    canViewKeys: string[];
    canEditKeys: string[];
  }
  | {
    role: "OWNER";
  }
);