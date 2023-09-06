declare global {
  type UserType = typeof UserType[keyof typeof UserType];
  type UserPayload = {
    type: UserType;
    userId: string;
    name: string;
  }
}

export const UserType = {
  GUEST: 'Guest',
  USER: 'User',
  ADMIN: 'Admin',
} as const;
