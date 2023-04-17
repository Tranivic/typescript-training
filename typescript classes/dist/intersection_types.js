"use strict";
var UserRole;
(function (UserRole) {
    UserRole[UserRole["ADMIN"] = 0] = "ADMIN";
    UserRole[UserRole["DEFAULT"] = 1] = "DEFAULT";
})(UserRole || (UserRole = {}));
class DefaultUser {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.role = UserRole.DEFAULT;
    }
}
class AdminUser extends DefaultUser {
    constructor(name, id) {
        super(name, id);
        this.name = name;
        this.id = id;
        this.role = UserRole.ADMIN;
    }
    showRole() {
        console.log(`The user is admin`);
    }
}
const adminUser1 = new AdminUser('Pedro', 1);
console.log(adminUser1);
const printUserInfo = (user) => {
    if (user.role === UserRole.ADMIN) {
        console.log('This user is admin');
    }
    else {
        console.log('This user is not admin');
    }
};
printUserInfo(adminUser1); // This user is admin
