
export enum IssueStatus {
  REPORTED = 'REPORTED',
  PROCESSING = 'PROCESSING',
  ASSIGNED = 'ASSIGNED',
  RESOLVED = 'RESOLVED'
}

export interface CivicIssue {
  id: string;
  type: string;
  location: string;
  status: IssueStatus;
  timestamp: Date;
  imageUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
}
