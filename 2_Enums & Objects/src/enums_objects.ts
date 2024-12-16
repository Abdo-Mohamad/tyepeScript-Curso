/* enum Roles {
    User = 1,
    Admin,
    SuperAdmin
}  */

enum Roles {
    User = 'USER',
    Admin = 'ADMIN',
    SuperAdmin = 'SUPERADMIN'
}

console.log(Roles.Admin); // se moustrara 'ADMIN'


// Object

const roles = {
    User: 'USER',
    Admin: 'ADMIN',
    SuperAdmin: 'SUPERADMIN'
};

console.log(roles.Admin); // se moustrara 'ADMIN'
