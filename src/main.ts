import { serve } from '.';
import * as env from 'env-var';

const PORT: number = env.get('PORT').required().asIntPositive();

serve(PORT);
