
const backUrl = process.env.NODE_ENV === 'production' ? 'http://api.feelming.org' : 'http://localhost:3065/api';

export { backUrl };