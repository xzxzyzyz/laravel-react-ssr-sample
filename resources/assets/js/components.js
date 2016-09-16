/**
 * Compoennts
 */
import WelcomeComponent from './components/WelcomeComponent';

var glob = typeof window !== "undefined" ? window : global;

glob['Welcome'] = WelcomeComponent;