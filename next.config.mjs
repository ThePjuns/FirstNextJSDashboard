/** @type {import('next').NextConfig} */

//const nextConfig = {}; changed to the lines below at chapter 10. Does give me a minor error tho. in here and in dashboard/layout

const nextConfig = {
    experimental: {
      ppr: 'incremental',
    },
  };

export default nextConfig;
