import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { VacationPolicyUpdateManyWithoutUsersInput } from "./VacationPolicyUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  role?: RoleWhereUniqueInput | null;
  roles?: InputJsonValue;
  username?: string;
  vacationPolicies?: VacationPolicyUpdateManyWithoutUsersInput;
};
