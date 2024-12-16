"use strict";
/* enum Roles {
    User = 1,
    Admin,
    SuperAdmin
}  */
var Roles;
(function (Roles) {
    Roles["User"] = "USER";
    Roles["Admin"] = "ADMIN";
    Roles["SuperAdmin"] = "SUPERADMIN";
})(Roles || (Roles = {}));
console.log(Roles.Admin);
// Object
const roles = {
    User: 'USER',
    Admin: 'ADMIN',
    SuperAdmin: 'SUPERADMIN'
};
console.log(roles.Admin);
