
const backUrl = process.env.NODE_ENV === 'production' ? 'http://api.feelming.org' : 'http://localhost:3065';
//const backUrl = process.env.NODE_ENV === 'production' ? 'http://localhost:3065' : 'http://localhost:3065';


export { backUrl };