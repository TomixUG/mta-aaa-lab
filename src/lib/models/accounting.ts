export interface Log {
  dateTime: Date;
  whereItHappened: string;
  severity: "low" | "medium" | "high" | "critical";
  description: string;
}
