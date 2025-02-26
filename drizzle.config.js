/**@type {import("drizzle-kit"),Config} */
export default{
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials:{
        url:'postgresql://neondb_owner:npg_bHN1Yf6csFud@ep-rapid-cloud-a8xsfp1e-pooler.eastus2.azure.neon.tech/ai_mock_interview?sslmode=require',
    }
}