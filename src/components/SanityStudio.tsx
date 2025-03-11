import { createClient } from '@sanity/client';
import { Config, Studio } from 'sanity';
import config from '../../sanity/sanity.config';

const SanityStudio = () => {
	return <Studio config={config as Config} />
}

export default SanityStudio;