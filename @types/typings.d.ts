import '@types/meteor-roles';

declare module "meteor/alanning:roles" {
  namespace Roles {
    function addRolesToParent(
      rolesNames: string|string[],
      parentName: string
    ) : void;
  }
}