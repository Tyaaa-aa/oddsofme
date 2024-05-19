export default defineEventHandler(async (event) => {
  const ENVIRONMENT = process.env.ENV ?? ''
  return ENVIRONMENT
})