import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { VacationPolicyCreateNestedManyWithoutUsersInput } from "./VacationPolicyCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  role?: RoleWhereUniqueInput | null;
  roles: InputJsonValue;
  username: string;
  vacationPolicies?: VacationPolicyCreateNestedManyWithoutUsersInput;
};
