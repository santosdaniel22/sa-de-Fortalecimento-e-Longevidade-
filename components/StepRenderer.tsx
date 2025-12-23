
import React from 'react';
import { FunnelStep, UserResponse } from '../types';
import Step1Attraction from './steps/Step1Attraction';
import Step2Awareness from './steps/Step2Awareness';
import Step3Education from './steps/Step3Education';
import Step4Engagement from './steps/Step4Engagement';
import Step5Authority from './steps/Step5Authority';
import Step6Bonus from './steps/Step6Bonus';
import Step7Conversion from './steps/Step7Conversion';

interface StepRendererProps {
  currentStep: FunnelStep;
  userResponse: UserResponse;
  updateResponse: (data: Partial<UserResponse>) => void;
  onNext: () => void;
}

const StepRenderer: React.FC<StepRendererProps> = ({ currentStep, userResponse, updateResponse, onNext }) => {
  switch (currentStep) {
    case FunnelStep.ATTRACTION:
      return <Step1Attraction onNext={(pain) => { updateResponse({ painLevel: pain }); onNext(); }} />;
    case FunnelStep.AWARENESS:
      return <Step2Awareness onNext={onNext} />;
    case FunnelStep.EDUCATION:
      return <Step3Education onNext={onNext} />;
    case FunnelStep.ENGAGEMENT:
      return <Step4Engagement userResponse={userResponse} onNext={(score) => { updateResponse({ vitalityScore: score }); onNext(); }} />;
    case FunnelStep.AUTHORITY:
      return <Step5Authority userResponse={userResponse} onNext={onNext} />;
    case FunnelStep.BONUS:
      return <Step6Bonus onNext={onNext} />;
    case FunnelStep.CONVERSION:
      return <Step7Conversion />;
    default:
      return null;
  }
};

export default StepRenderer;
