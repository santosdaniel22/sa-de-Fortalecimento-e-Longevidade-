
export enum FunnelStep {
  ATTRACTION = 0,
  AWARENESS = 1,
  EDUCATION = 2,
  ENGAGEMENT = 3,
  AUTHORITY = 4,
  BONUS = 5,
  CONVERSION = 6
}

export interface UserResponse {
  painLevel?: string;
  habits?: string[];
  vitalityScore?: number;
  email?: string;
  name?: string;
}

export interface FunnelState {
  currentStep: FunnelStep;
  userResponse: UserResponse;
}
