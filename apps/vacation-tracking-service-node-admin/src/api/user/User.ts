import { Role } from "../role/Role";
import { JsonValue } from "type-fest";
import { VacationPolicy } from "../vacationPolicy/VacationPolicy";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  role?: Role | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  vacationPolicies?: Array<VacationPolicy>;
};
