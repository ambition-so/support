import development from './dev';
import production from './prod';

const configs = {
    development,
    production,
};

// Enviornment variable is set in react-scripts
const exportedConfig = configs[process.env.NODE_ENV];
console.log('Loaded', process.env.NODE_ENV, 'config');

export default exportedConfig;