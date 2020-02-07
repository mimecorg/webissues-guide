const path = require( 'path' );

module.exports = {
  base: '/webissues-guide/',
  dest: path.resolve( __dirname, '../../dist' ),
  title: 'WebIssues Guide',
  description: 'User guide for the WebIssues team collaboration system',
  head: [
    [ 'link', { rel: 'shortcut icon', href: '/webissues.ico' } ],
    [ 'link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' } ],
  ],
  themeConfig: {
    logo: '/webissues-logo.png',
    nav: [
      { text: 'WebIssues Website', link: 'https://webissues.mimec.org' },
      { text: 'GitHub', link: 'https://github.com/mimecorg/webissues' },
    ],
    sidebar: [
      '/',
      '/installation',
      '/working-with-issues',
      '/tracking-issues',
      '/system-administration',
      '/customization',
    ],
    sidebarDepth: 2
  },
  plugins: [ 'check-md' ]
};
