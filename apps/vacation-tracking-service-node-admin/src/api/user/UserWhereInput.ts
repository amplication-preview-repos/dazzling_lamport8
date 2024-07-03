import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { VacationPolicyListRelationFilter } from "../vacationPolicy/VacationPolicyListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  role?: RoleWhereUniqueInput;
  username?: StringFilter;
  vacationPolicies?: VacationPolicyListRelationFilter;
};
