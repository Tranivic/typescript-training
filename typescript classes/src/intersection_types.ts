// Intersection Types - Typescript
enum UserRole {
  ADMIN,
  DEFAULT,
}

class DefaultUser {
  public role: UserRole;
  constructor(readonly name: string, readonly id: number) {
    this.role = UserRole.DEFAULT;
  }
}

class AdminUser extends DefaultUser {
  constructor(readonly name: string, readonly id: number) {
    super(name, id);
    this.role = UserRole.ADMIN;
  }
  showRole(): void {
    console.log(`The user is admin`);
  }
}

type UnknownUser = AdminUser & DefaultUser;

const adminUser1 = new AdminUser('Pedro', 1);
console.log(adminUser1);

const printUserInfo = (user: UnknownUser) => {
  if (user.role === UserRole.ADMIN) {
    console.log('This user is admin');
  } else {
    console.log('This user is not admin');
  }
};

printUserInfo(adminUser1);
