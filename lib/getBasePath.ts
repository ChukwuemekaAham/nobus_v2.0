function getBasePath() {
    let base_url = 
        process.env.NEXT_PUBLIC_NODE_ENV === 'development'
        ? `${process.env.NEXT_PUBLIC_BASE}`
        : `${process.env.NEXT_PUBLIC_API_URL}`
  return base_url
}

export default getBasePath