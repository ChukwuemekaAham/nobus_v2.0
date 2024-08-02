function getBasePath() {
    let base_url = 
        process.env.NEXT_PUBLIC_NODE_ENV === 'production'
        ? process.env.NEXT_PUBLIC_API_URL
        : process.env.NEXT_PUBLIC_BASE
  return base_url
}

export default getBasePath