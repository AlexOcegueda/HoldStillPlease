import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      pages: 'build', 
      assets: 'build',
      fallback: null, 
    }),
    prerender: {
      handleMissingId: 'ignore', // Ignore missing assets during prerender
    },
  },
};

export default config;
