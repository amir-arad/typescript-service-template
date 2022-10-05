import * as env from 'env-var';

import { serve } from '.';

const PORT: number = env.get('PORT').required().asIntPositive();

serve(PORT);
