export default {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://ub9ap855pc.execute-api.us-east-1.amazonaws.com/prod/"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_EdppiaAwQ",
    APP_CLIENT_ID: "1vgfhn4ct8n25v7sg4pa22760r",
    IDENTITY_POOL_ID: "us-east-1:b64ae28d-df27-4875-804c-49fc05a8c16a"
  }
};
